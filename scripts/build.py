#!/usr/bin/env python3
"""Interview OS 内容生成器：把 content/ 下的 Markdown 转成 web/assets/js/data.js。

用法：python3 scripts/build.py
"""
import datetime
import html
import json
import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
OUT = ROOT / "web" / "assets" / "js" / "data.js"

DOMAIN_META = {
    "spark": {"label": "Spark", "type": "technical"},
    "warehouse": {"label": "数仓", "type": "technical"},
    "sql": {"label": "SQL", "type": "technical"},
    "project": {"label": "项目 / 行为", "type": "project"},
    "hdfs": {"label": "HDFS", "type": "technical"},
    "storage": {"label": "存储引擎", "type": "technical"},
    "flink": {"label": "Flink", "type": "technical"},
    "network": {"label": "网络", "type": "technical"},
    "algorithm": {"label": "算法", "type": "technical"},
    "llm": {"label": "大模型", "type": "technical"},
}
DOMAIN_ORDER = ["spark", "hdfs", "storage", "flink", "network", "algorithm", "llm", "warehouse", "sql", "project"]


def split_frontmatter(text: str):
    if not text.startswith("---"):
        return None, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return None, text
    return parts[1], parts[2]


def inline(text: str) -> str:
    text = html.escape(text, quote=False)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    return text


def md_to_html(md: str) -> str:
    lines = md.split("\n")
    out = []
    i = 0
    n = len(lines)
    in_code = False
    code_lang = ""
    code_buf = []
    list_stack = []
    para = []

    def flush_para():
        if para:
            out.append("<p>" + " ".join(para) + "</p>")
            para.clear()

    def close_lists():
        while list_stack:
            out.append("</" + list_stack.pop() + ">")

    while i < n:
        line = lines[i]
        s = line.strip()
        if in_code:
            if s.startswith("```"):
                out.append(
                    '<pre><code class="language-%s">%s</code></pre>'
                    % (code_lang, "\n".join(code_buf))
                )
                in_code, code_buf, code_lang = False, [], ""
            else:
                code_buf.append(html.escape(line))
            i += 1
            continue
        if s.startswith("```"):
            in_code = True
            code_lang = s[3:].strip()
            i += 1
            continue
        if s == "":
            close_lists()
            flush_para()
            i += 1
            continue
        m = re.match(r"^(#{1,4})\s+(.*)$", s)
        if m:
            close_lists()
            flush_para()
            level = min(len(m.group(1)) + 1, 5)
            out.append("<h%d>%s</h%d>" % (level, inline(m.group(2)), level))
            i += 1
            continue
        if s == "---":
            close_lists()
            flush_para()
            out.append("<hr>")
            i += 1
            continue
        m = re.match(r"^[-*]\s+(.*)$", s)
        if m:
            flush_para()
            if not list_stack or list_stack[-1] != "ul":
                out.append("<ul>")
                list_stack.append("ul")
            out.append("<li>" + inline(m.group(1)) + "</li>")
            i += 1
            continue
        m = re.match(r"^\d+\.\s+(.*)$", s)
        if m:
            flush_para()
            if not list_stack or list_stack[-1] != "ol":
                out.append("<ol>")
                list_stack.append("ol")
            out.append("<li>" + inline(m.group(1)) + "</li>")
            i += 1
            continue
        if s.startswith(">"):
            close_lists()
            flush_para()
            qlines = []
            while i < n and lines[i].strip().startswith(">"):
                qlines.append(lines[i].strip()[1:].strip())
                i += 1
            out.append("<blockquote>" + "<br>".join(inline(q) for q in qlines) + "</blockquote>")
            continue
        close_lists()
        para.append(inline(s))
        i += 1

    close_lists()
    flush_para()
    if in_code:
        out.append("<pre><code>%s</code></pre>" % "\n".join(code_buf))
    return "\n".join(out)


def read_md(path: Path):
    raw = path.read_text(encoding="utf-8")
    fm, body = split_frontmatter(raw)
    if fm:
        meta = yaml.safe_load(fm) or {}
    else:
        meta = {}
    return meta, body


def load_questions():
    qdir = CONTENT / "questions"
    items = []
    for md in sorted(qdir.rglob("*.md")):
        rel = md.relative_to(qdir)
        domain = rel.parent.name or rel.stem
        meta, body = read_md(md)
        meta = dict(meta)
        meta.setdefault("id", md.stem)
        meta.setdefault("type", DOMAIN_META.get(domain, {}).get("type", "technical"))
        meta.setdefault("question", md.stem)
        meta.setdefault("topic", [])
        meta.setdefault("difficulty", 0)
        meta.setdefault("frequency", "")
        meta.setdefault("source_type", "unknown")
        meta["domain"] = domain
        meta["body_html"] = md_to_html(body.strip())
        items.append(meta)
    items.sort(key=lambda q: (DOMAIN_ORDER.index(q["domain"]) if q["domain"] in DOMAIN_ORDER else 99, q["id"]))
    return items


def load_interviews():
    idir = CONTENT / "interviews"
    items = []
    for md in sorted(idir.rglob("*.md")):
        meta, body = read_md(md)
        meta = dict(meta)
        meta.setdefault("interview_id", md.stem)
        meta["body_html"] = md_to_html(body.strip())
        items.append(meta)
    items.sort(key=lambda x: x.get("date", ""), reverse=True)
    return items


def main():
    questions = load_questions()
    interviews = load_interviews()
    domains = {}
    for q in questions:
        d = q["domain"]
        domains[d] = domains.get(d, 0) + 1
    stats = {
        "questions": len(questions),
        "interviews": len(interviews),
        "technical": sum(1 for q in questions if q.get("type") == "technical"),
        "project": sum(1 for q in questions if q.get("type") != "technical"),
        "domains": domains,
    }
    payload = {
        "generatedAt": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "stats": stats,
        "domains": {d: DOMAIN_META.get(d, {"label": d, "type": "technical"}) for d in domains},
        "questions": questions,
        "interviews": interviews,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    js = "window.OS_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2, default=str) + ";\n"
    OUT.write_text(js, encoding="utf-8")
    print("生成 %s（%d 题 / %d 面经）" % (OUT, stats["questions"], stats["interviews"]))


if __name__ == "__main__":
    main()
