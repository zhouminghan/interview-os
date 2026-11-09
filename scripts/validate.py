#!/usr/bin/env python3
"""构建期校验：硬错误阻断发布，内容债务只警告。

用法：
  python3 scripts/validate.py --strict
  python3 scripts/validate.py --strict --no-visual
"""
import argparse
import html
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "web" / "assets" / "js" / "data.js"
QUESTION_ID_RE = re.compile(
    r"^(?:ALGORITHM|FLINK|HDFS|LAKEHOUSE|LLM|ML|NETWORK|PLATFORM|PROJECT|SPARK|SQL|STARROCKS|STATISTICS|STORAGE|SYSTEM|WAREHOUSE)-\d{4}$"
)
VALID_SOURCE_TYPES = {"knowledge", "ai_generated"}
REQUIRED_TECHNICAL_STAGES = {"pitch", "short", "long", "followup"}
PERSONAL_RE = re.compile(r"我在|我们项目|我负责|我当时|我的")


def load_data():
    raw = DATA.read_text(encoding="utf-8")
    return json.loads(raw.split("=", 1)[1].strip().rstrip(";"))


def answer_text(q):
    markup = "".join(str(s.get("html") or "") for s in (q.get("sections") or []))
    if not markup:
        markup = str(q.get("body_html") or "")
    return re.sub(r"\s+", "", html.unescape(re.sub(r"<[^>]+>", " ", markup)))


def last_line(text):
    lines = (text or "").strip().splitlines()
    return lines[-1] if lines else "no output"


def resolve_chrome():
    raw = (
        os.environ.get("CHROME_BIN")
        or shutil.which("google-chrome")
        or shutil.which("chromium")
        or shutil.which("chromium-browser")
        or "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    )
    if not raw:
        return None
    raw_str = str(raw)
    if raw_str.startswith(("~", "./", "../")) or os.path.isabs(raw_str) or "/" in raw_str or "\\" in raw_str:
        candidate = Path(os.path.abspath(os.path.expanduser(raw_str)))
        return str(candidate) if candidate.is_file() and os.access(candidate, os.X_OK) else None
    return shutil.which(raw_str)


def check_data_consistency():
    hard, warn = [], []
    try:
        with tempfile.TemporaryDirectory() as td:
            tmp = Path(td)
            shutil.copytree(ROOT / "content", tmp / "content")
            shutil.copytree(ROOT / "scripts", tmp / "scripts")
            (tmp / "web" / "assets" / "js").mkdir(parents=True, exist_ok=True)
            proc = subprocess.run(
                [sys.executable, str(tmp / "scripts" / "build.py")],
                cwd=tmp, capture_output=True, text=True,
            )
            if proc.returncode != 0:
                hard.append("data.js 重新生成失败：" + proc.stderr.strip().splitlines()[-1])
                return hard, warn
            built = json.loads((tmp / "web" / "assets" / "js" / "data.js").read_text(encoding="utf-8").split("=", 1)[1].strip().rstrip(";"))
            current = load_data()
            current.pop("generatedAt", None)
            built.pop("generatedAt", None)
            if current != built:
                hard.append("data.js 与 content/ 不一致")
    except Exception as e:
        hard.append("data.js 一致性检查异常：" + str(e))
    return hard, warn


def check_content(data):
    hard, warn = [], []
    questions = data.get("questions") or []
    interviews = data.get("interviews") or []
    seen = set()
    duplicate = invalid = unknown_source = knowledge_sources = 0
    short_answers = missing_stages = coach = needs_review = needs_answer = 0
    personal = mislabeled = unlinked = 0

    for q in questions:
        qid = str(q.get("id") or "")
        if qid in seen:
            duplicate += 1
        seen.add(qid)
        if not QUESTION_ID_RE.fullmatch(qid):
            invalid += 1
        source_type = str(q.get("source_type") or "")
        if source_type not in VALID_SOURCE_TYPES:
            unknown_source += 1
        if source_type == "knowledge" and q.get("sources"):
            knowledge_sources += 1
        stage_keys = {str(s.get("stage_key") or "") for s in (q.get("sections") or [])}
        if str(q.get("type")) == "technical":
            if len(answer_text(q)) < 120:
                short_answers += 1
            if not REQUIRED_TECHNICAL_STAGES.issubset(stage_keys):
                missing_stages += 1
        if q.get("has_coach"):
            coach += 1
        status = str(q.get("content_status") or "")
        if status == "needs_review":
            needs_review += 1
        elif status == "needs_answer":
            needs_answer += 1
        if q.get("needs_personal_input") and PERSONAL_RE.search(answer_text(q)):
            personal += 1
        if source_type == "ai_generated" and any(
            ("面试官原问题" in str(s.get("title") or "") or "面试官原话" in str(s.get("title") or ""))
            for s in (q.get("sections") or [])
        ):
            mislabeled += 1

    for iv in interviews:
        if not (iv.get("items") or []):
            hard.append("0 items 面经：" + str(iv.get("interview_id")))
        if not (iv.get("linked") or []):
            unlinked += 1

    if duplicate: hard.append(f"重复 ID {duplicate}")
    if invalid: hard.append(f"非法 ID {invalid}")
    if unknown_source: hard.append(f"未知 source_type {unknown_source}")
    if knowledge_sources: hard.append(f"knowledge 带 sources {knowledge_sources}")
    if short_answers: warn.append(f"technical 答案正文<120字 {short_answers}")
    if missing_stages: warn.append(f"缺 canonical stage {missing_stages}")
    if coach: warn.append(f"coach 题卡 {coach}")
    if needs_review: warn.append(f"待复核 {needs_review}")
    if needs_answer: warn.append(f"待补答案 {needs_answer}")
    if personal: warn.append(f"needs_personal_input 含第一人称 {personal}")
    if mislabeled: warn.append(f"AI 追问疑似写成面试官原话 {mislabeled}")
    if unlinked: warn.append(f"无关联面经 {unlinked}")
    return hard, warn


def check_visual():
    chrome = resolve_chrome()
    if not chrome:
        return [
            "未找到 Chrome 可执行文件（CHROME_BIN="
            + (os.environ.get("CHROME_BIN") or "auto")
            + "），无法执行 390px CDP 校验"
        ], []
    env = os.environ.copy()
    env["CHROME_BIN"] = chrome
    proc = subprocess.run(
        ["node", str(ROOT / "scripts" / "visual_check.mjs")],
        cwd=ROOT, env=env, capture_output=True, text=True,
    )
    try:
        payload = json.loads(proc.stdout.strip().splitlines()[-1])
        hard = list(payload.get("hardErrors") or [])
        warn = list(payload.get("warnings") or [])
        if proc.returncode != 0 and not hard:
            hard.append("CDP 视觉检查失败：" + last_line(proc.stderr or proc.stdout))
        return hard, warn
    except Exception:
        return ["CDP 视觉检查输出无法解析：" + last_line(proc.stderr or proc.stdout)], []


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--strict", action="store_true", help="包含 390px CDP 视觉与控制台检查")
    parser.add_argument("--no-visual", action="store_true", help="跳过 CDP 视觉检查")
    args = parser.parse_args()

    hard, warn = check_content(load_data())
    consistency_hard, consistency_warn = check_data_consistency()
    hard += consistency_hard
    warn += consistency_warn
    if args.strict and not args.no_visual:
        visual_hard, visual_warn = check_visual()
        hard += visual_hard
        warn += visual_warn
    else:
        warn.append("已跳过 CDP 视觉检查")

    print("硬错误 " + str(len(hard)) + " / 警告 " + str(len(warn)))
    for item in hard:
        print("ERROR " + item)
    for item in warn:
        print("WARN  " + item)
    sys.exit(1 if hard else 0)


if __name__ == "__main__":
    main()
