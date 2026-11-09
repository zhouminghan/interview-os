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
REVIEW_MANIFEST = CONTENT / "review-manifest.yml"
LINK_MANIFEST = CONTENT / "interview-links.yml"

DIAGRAM_RE = re.compile(r"^```diagram\s*\n(.*?)^```[ \t]*$", re.M | re.S)
SOCRATIC_RE = re.compile(r"^```socratic\s*\n(.*?)^```[ \t]*$", re.M | re.S)

DOMAIN_META = {
    "spark": {"label": "Spark", "type": "technical"},
    "warehouse": {"label": "数仓", "type": "technical"},
    "sql": {"label": "SQL", "type": "technical"},
    "project": {"label": "项目 / 行为", "type": "project"},
    "hdfs": {"label": "Hadoop / HDFS", "type": "technical"},
    "storage": {"label": "存储引擎", "type": "technical"},
    "lakehouse": {"label": "数据湖", "type": "technical"},
    "starrocks": {"label": "StarRocks", "type": "technical"},
    "flink": {"label": "Flink", "type": "technical"},
    "platform": {"label": "平台 / 低代码", "type": "technical"},
    "system": {"label": "系统 / 性能", "type": "technical"},
    "network": {"label": "网络", "type": "technical"},
    "algorithm": {"label": "算法", "type": "technical"},
    "statistics": {"label": "统计", "type": "technical"},
    "ml": {"label": "机器学习", "type": "technical"},
    "llm": {"label": "大模型", "type": "technical"},
}
DOMAIN_ORDER = ["spark", "hdfs", "storage", "lakehouse", "starrocks", "flink", "network", "algorithm", "statistics", "ml", "llm", "platform", "system", "warehouse", "sql", "project"]

QUESTION_ID_RE = re.compile(
    r"^(?:ALGORITHM|FLINK|HDFS|LAKEHOUSE|LLM|ML|NETWORK|PLATFORM|PROJECT|SPARK|SQL|STARROCKS|STATISTICS|STORAGE|SYSTEM|WAREHOUSE)-\d{4}$"
)
VALID_SOURCE_TYPES = {"knowledge", "ai_generated"}
REQUIRED_TECHNICAL_STAGES = {"pitch", "short", "long", "followup"}


def load_manifest(path):
    if not path.exists():
        return {}
    try:
        return yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    except Exception:
        return {}

STAGE_LABELS = {
    "thinking": "回答思路",
    "pitch": "一句话",
    "short": "30 秒回答",
    "long": "1 分钟回答",
    "followup": "追问",
    "project": "项目结合",
    "risk": "风险点",
    "framework": "表达框架",
    "coach": "教练备注",
    "notes": "补充说明",
}


def _normalize_stage_title(value) -> str:
    text = str(value or "").strip().lower()
    text = re.sub(r"\s+", "", text)
    return text.replace("（", "(").replace("）", ")").replace("，", ",").replace("：", ":")


STAGE_RULES = (
    ("thinking", (
        "回答思路", "思路", "正确回答思路", "整体回答框架", "核心回答框架",
        "回答核心框架", "标准回答框架", "题目理解", "优化思路", "整体架构介绍",
    )),
    ("pitch", ("一句话", "一句话总结", "核心结论")),
    ("short", ("30 秒", "30秒", "记忆版本", "最终面试版", "最终记忆版", "面试记忆版")),
    ("long", (
        "1 分钟", "1分钟", "一分钟", "参考回答", "标准回答", "面试标准回答",
        "如果我是求职者", "求职者视角",
    )),
    ("followup", ("追问", "面试官继续问", "面试官追问", "可能追问", "如果继续追问")),
    ("project", ("项目结合", "业务结合", "结合你的项目", "结合QQ频道", "结合项目")),
    ("risk", ("风险", "踩坑", "踩的坑", "容易扣分", "常见错误", "扣分点")),
    ("framework", ("回答框架", "待补充", "要点提纲")),
    ("coach", (
        "评分", "你的原回答评价", "你的面试表现", "技术自检", "表达训练",
        "表达提升", "表达能力", "表达技巧", "表达节奏", "回答里遗漏",
    )),
)
STAGE_RULES = tuple(
    (key, tuple(_normalize_stage_title(token) for token in tokens))
    for key, tokens in STAGE_RULES
)

TECHNICAL_ANSWER_OUTLINE = [
    "先给结论：用一句话讲清 mechanism / 结论",
    "展开机制：用 30 秒讲 2-3 个关键点，不堆名词",
    "补边界与落地：参数、取舍、异常、项目场景",
    "准备追问：回到原理、失败场景与优化空间",
]
PERSONAL_ANSWER_OUTLINE = [
    "先交代背景：说明场景与约束，只填真实信息",
    "再讲目标：说清任务、责任边界和判断标准",
    "展开动作：按关键决策顺序讲做了什么、为什么这样做",
    "给出结果：说明结果、反馈与可核实的变化",
    "最后复盘：讲取舍、风险和后续改进",
]

CIRCLED_NUMBERS = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳"
CIRCLED_INDEX = {char: i + 1 for i, char in enumerate(CIRCLED_NUMBERS)}
MAX_OCR_ITEM_NUMBER = 50

START_ARABIC_MARK_RE = re.compile(r"^\s*(?P<num>\d{1,2})\s*[.、．)）](?!\d)\s*")
START_CIRCLED_MARK_RE = re.compile(r"^\s*(?P<mark>[" + re.escape(CIRCLED_NUMBERS) + r"])\s*")
START_BARE_MARK_RE = re.compile(r"^\s*(?P<num>0?\d{1,2})(?:\s+|(?=[一-龥A-Za-z]))")
STANDALONE_NUMBER_RE = re.compile(r"^\s*(?P<num>0?\d{1,2})\s*[/、.．]?\s*$")
STANDALONE_CIRCLED_RE = re.compile(r"^\s*(?P<mark>[" + re.escape(CIRCLED_NUMBERS) + r"])\s*$")

ITEM_PREFIX = r"[\s，。；;：:、！？!?）)]"
INLINE_ARABIC_MARK_RE = re.compile(
    r"(?P<prefix>" + ITEM_PREFIX + r")(?P<num>\d{1,2})\s*[.、．)）](?!\d)\s*"
)
INLINE_CIRCLED_MARK_RE = re.compile(
    r"(?P<prefix>" + ITEM_PREFIX + r")(?P<mark>[" + re.escape(CIRCLED_NUMBERS) + r"])\s*"
)
INLINE_BARE_MARK_RE = re.compile(
    r"(?P<prefix>" + ITEM_PREFIX + r")(?P<num>0?\d{1,2})\s+(?=[一-龥A-Za-z?？])"
)
SOURCE_LINE_RE = re.compile(
    r"(?:^|[>\s*•-])(?:备注|来源|原帖|发布日期|发布时间|图片|OCR|题源|来源说明|具体面经见|题目全部来自|纯图片笔记)",
    re.I,
)
DATE_LINE_RE = re.compile(r"^(?:\d{4}[-/.年]\d{1,2}|\d{1,2}[.．]\d{1,2}[-—~至])")
NON_QUESTION_PREFIX_RE = re.compile(
    r"^(?:个|年|月|日|分钟|小时|秒|mins?|min|h|届|轮|面|题|道|位|人|次|%)",
    re.I,
)


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
        if s.startswith("|"):
            close_lists()
            flush_para()
            rows = []
            while i < n and lines[i].strip().startswith("|"):
                cell_line = lines[i].strip()
                if cell_line.startswith("|"):
                    cell_line = cell_line[1:]
                if cell_line.endswith("|"):
                    cell_line = cell_line[:-1]
                rows.append([c.strip() for c in cell_line.split("|")])
                i += 1
            if len(rows) >= 2 and all(
                re.fullmatch(r":?-{1,}:?", c) for c in rows[1]
            ):
                cells = ["<th>" + inline(c) + "</th>" for c in rows[0]]
                html_rows = ["<table><thead><tr>" + "".join(cells) + "</tr></thead><tbody>"]
                for row in rows[2:]:
                    cells = ["<td>" + inline(c) + "</td>" for c in row]
                    html_rows.append("<tr>" + "".join(cells) + "</tr>")
                html_rows.append("</tbody></table>")
                out.append("".join(html_rows))
            else:
                for row in rows:
                    out.append("<p>" + " | ".join(inline(c) for c in row) + "</p>")
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


def _truthy(value) -> bool:
    if isinstance(value, str):
        return value.strip().lower() in ("true", "yes", "1", "y", "是")
    return bool(value)


def canonical_stage(title, q_type, needs_personal_input):
    """把历史章节标题归一到稳定的展示 / 筛选阶段，不改动原始标题。"""
    normalized = _normalize_stage_title(title)
    normalized_type = str(q_type or "").strip().lower()
    personal = _truthy(needs_personal_input)
    for key, tokens in STAGE_RULES:
        if key == "framework" and normalized_type == "technical" and not personal:
            continue
        if any(token in normalized for token in tokens):
            return {"stage_key": key, "stage_label": STAGE_LABELS[key]}
    return {"stage_key": "notes", "stage_label": STAGE_LABELS["notes"]}


def _answer_outline(q_type, needs_personal_input, sections):
    if any(sec.get("stage_key") == "thinking" for sec in sections):
        return []
    if str(q_type or "").strip().lower() != "technical" or _truthy(needs_personal_input):
        return list(PERSONAL_ANSWER_OUTLINE)
    return list(TECHNICAL_ANSWER_OUTLINE)


def _is_source_line(line: str) -> bool:
    s = str(line or "").strip()
    if not s or s.startswith((">", "```", "#")) or s in ("---", "***", "___"):
        return True
    if DATE_LINE_RE.match(s) or SOURCE_LINE_RE.search(s):
        return True
    return bool(re.fullmatch(r"[#＃]\S+(?:\s+[#＃]\S+)*", s))


def _looks_like_item_body(text: str) -> bool:
    s = re.sub(r"^[\s>\-•*]+", "", str(text or ""))
    if len(s) < 2 or _is_source_line(s) or NON_QUESTION_PREFIX_RE.match(s):
        return False
    return True


def _clean_interview_text(content: str) -> str:
    cleaned = []
    in_code = False
    for line in str(content or "").split("\n"):
        s = line.strip()
        if s.startswith("```"):
            in_code = not in_code
            cleaned.append("")
            continue
        if in_code or _is_source_line(s):
            cleaned.append("")
        else:
            cleaned.append(line)
    return "\n".join(cleaned)


def _plausible_number_sequence(numbers) -> bool:
    if len(numbers) < 2 or any(n < 1 or n > MAX_OCR_ITEM_NUMBER for n in numbers):
        return False
    positive_steps = 0
    for current, following in zip(numbers, numbers[1:]):
        step = following - current
        if 1 <= step <= 2:
            positive_steps += 1
        elif following != 1:
            return False
    return positive_steps >= 1


def _extract_legacy_items(content: str, strict: bool = False):
    """保留原有列表解析行为，用于逐篇维持既有面经的 items 数量。"""
    list_start = r"^(\d+)[.、．](?!\d)\s*(.*)$" if strict else r"^(\d+)[.、．]\s*(.*)$"
    split_at = r"(?<=\S)\s+(?=\d+[.、．](?!\d))" if strict else r"(?<=\S)\s+(?=\d+[.、．]\s)"
    lines = content.split("\n")
    normalized = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if re.search(r"\d+[.、．]\s*$", line.strip()) and i + 1 < len(lines):
            nxt = lines[i + 1].strip()
            if nxt and not re.match(r"^\d+[.、．]\s", nxt) and not nxt.startswith((">", "#", "```")):
                normalized.append(line.rstrip() + " " + nxt)
                i += 2
                continue
        normalized.append(line)
        i += 1

    items = []
    for line in normalized:
        s = line.strip()
        if not s or s.startswith(">") or s.startswith("```"):
            continue
        parts = re.split(split_at, s)
        if len(parts) > 1:
            for p in parts:
                m = re.match(list_start, p.strip())
                if m:
                    items.append({"n": int(m.group(1)), "text": m.group(2).strip()})
            continue
        m = re.match(list_start, s)
        if m:
            items.append({"n": int(m.group(1)), "text": m.group(2).strip()})
    return items


def _extract_marker_items(content: str):
    """从行内编号、圈号和 OCR 裸序号里提取题面，沿用原文片段。"""
    candidates = []
    offset = 0
    for line in content.split("\n"):
        line_start = offset
        offset += len(line) + 1
        if not line.strip():
            continue

        m = STANDALONE_NUMBER_RE.match(line)
        if m:
            n = int(m.group("num"))
            if 1 <= n <= MAX_OCR_ITEM_NUMBER:
                candidates.append({
                    "n": n, "start": line_start, "end": line_start + len(line),
                    "confidence": "standalone",
                })
            continue
        m = STANDALONE_CIRCLED_RE.match(line)
        if m:
            candidates.append({
                "n": CIRCLED_INDEX[m.group("mark")], "start": line_start,
                "end": line_start + len(line), "confidence": "standalone",
            })
            continue

        m = START_ARABIC_MARK_RE.match(line)
        if m:
            n = int(m.group("num"))
            if 1 <= n <= MAX_OCR_ITEM_NUMBER:
                candidates.append({
                    "n": n, "start": line_start + m.start("num"),
                    "end": line_start + m.end(), "confidence": "strong",
                })
        else:
            m = START_CIRCLED_MARK_RE.match(line)
            if m:
                candidates.append({
                    "n": CIRCLED_INDEX[m.group("mark")],
                    "start": line_start + m.start("mark"),
                    "end": line_start + m.end(), "confidence": "strong",
                })
            else:
                m = START_BARE_MARK_RE.match(line)
                if m:
                    n = int(m.group("num"))
                    if 1 <= n <= MAX_OCR_ITEM_NUMBER and _looks_like_item_body(line[m.end():]):
                        candidates.append({
                            "n": n, "start": line_start + m.start("num"),
                            "end": line_start + m.end(), "confidence": "weak",
                        })

        for regex, group, confidence in (
            (INLINE_ARABIC_MARK_RE, "num", "strong"),
            (INLINE_CIRCLED_MARK_RE, "mark", "strong"),
            (INLINE_BARE_MARK_RE, "num", "weak"),
        ):
            for m in regex.finditer(line):
                raw = m.group(group)
                n = int(raw) if group == "num" else CIRCLED_INDEX[raw]
                if not 1 <= n <= MAX_OCR_ITEM_NUMBER:
                    continue
                if confidence == "weak" and not _looks_like_item_body(line[m.end():]):
                    continue
                candidates.append({
                    "n": n, "start": line_start + m.start(group),
                    "end": line_start + m.end(), "confidence": confidence,
                })

    priority = {"strong": 0, "standalone": 1, "weak": 2}
    candidates.sort(key=lambda c: (c["start"], priority[c["confidence"]], c["end"]))
    deduped = []
    for candidate in candidates:
        if deduped and candidate["start"] < deduped[-1]["end"]:
            continue
        deduped.append(candidate)

    sequence = _plausible_number_sequence([c["n"] for c in deduped])
    if sequence:
        kept = deduped
    elif any(c["confidence"] == "strong" for c in deduped):
        kept = [c for c in deduped if c["confidence"] == "strong"]
    else:
        kept = []

    items = []
    for i, candidate in enumerate(kept):
        end = kept[i + 1]["start"] if i + 1 < len(kept) else len(content)
        text = content[candidate["end"]:end].strip()
        if text and len(re.sub(r"\s+", "", text)) >= 2:
            items.append({"n": candidate["n"], "text": text})
    return items


def parse_sections(body: str):
    """按一级标题把正文切成章节，供交互式逐阶段展示。"""
    sections = []
    cur_title = None
    cur_lines = []

    def flush():
        nonlocal cur_title, cur_lines
        content = "\n".join(cur_lines).strip()
        if cur_title is None:
            if content:
                sections.append({"title": "", "content": content})
        else:
            sections.append({"title": cur_title, "content": content})
        cur_title = None
        cur_lines = []

    for line in body.split("\n"):
        m = re.match(r"^#\s+(.*)$", line)
        if m:
            flush()
            cur_title = m.group(1).strip()
        else:
            cur_lines.append(line)
    flush()
    return sections


def parse_interview_sections(body: str):
    """按一级 / 二级标题把面经正文切成章节。"""
    sections = []
    cur_title = None
    cur_lines = []

    def flush():
        nonlocal cur_title, cur_lines
        content = "\n".join(cur_lines).strip()
        if cur_title is None:
            if content:
                sections.append({"title": "", "content": content})
        else:
            sections.append({"title": cur_title, "content": content})
        cur_title = None
        cur_lines = []

    for line in body.split("\n"):
        m = re.match(r"^(#{1,2})\s+(.*)$", line)
        if m:
            flush()
            cur_title = m.group(2).strip()
        else:
            cur_lines.append(line)
    flush()
    return sections


def parse_system_stages(body: str):
    """按二级标题把系统图解切成阶段。"""
    stages = []
    cur_title = None
    cur_lines = []

    def flush():
        nonlocal cur_title, cur_lines
        content = "\n".join(cur_lines).strip()
        if cur_title is not None:
            stages.append({"title": cur_title, "content": content})
        cur_title = None
        cur_lines = []

    for line in body.split("\n"):
        m = re.match(r"^##\s+(.*)$", line)
        if m:
            flush()
            cur_title = m.group(1).strip()
        else:
            cur_lines.append(line)
    flush()
    return stages


def extract_items(content: str, legacy_only: bool = False):
    """兼容标准列表、行内编号、圈号与图片 OCR 的裸序号。"""
    if legacy_only:
        return _extract_legacy_items(content)
    cleaned = _clean_interview_text(content)
    legacy_items = _extract_legacy_items(cleaned, strict=True)
    marker_items = _extract_marker_items(cleaned)
    if marker_items and len(marker_items) >= len(legacy_items):
        return marker_items
    return legacy_items


def _strip_interview_notes(content: str) -> str:
    """兜底原文只排除备注与代码块；原始 body_html / sections 仍完整保留。"""
    cleaned = []
    in_code = False
    for line in str(content or "").split("\n"):
        s = line.strip()
        if s.startswith("```"):
            in_code = not in_code
            cleaned.append("")
            continue
        if in_code or s.startswith(">"):
            cleaned.append("")
        else:
            cleaned.append(line)
    return "\n".join(cleaned).strip()


def extract_diagrams(content: str):
    """抽出 ```diagram 代码块并解析为结构化图，返回 (干净正文, 图列表)。"""
    diagrams = []

    def repl(m):
        try:
            d = yaml.safe_load(m.group(1))
            if isinstance(d, dict):
                diagrams.append(d)
        except Exception:
            pass
        return ""

    clean = DIAGRAM_RE.sub(repl, content)
    return clean.strip(), diagrams


def normalize_diagram(d):
    if not isinstance(d, dict):
        return None
    if d.get("type", "flow") not in ("flow", "seq"):
        return None
    return d


def extract_socratic(content: str):
    """抽出 ```socratic 引导块，返回 (干净正文, 引导列表)。"""
    guides = []

    def repl(m):
        try:
            d = yaml.safe_load(m.group(1))
            if isinstance(d, dict) and d.get("type") == "socratic" and isinstance(d.get("steps"), list):
                guides.append(d)
        except Exception:
            pass
        return ""

    clean = SOCRATIC_RE.sub(repl, content)
    return clean.strip(), guides


def normalize_socratic(d):
    if not isinstance(d, dict) or d.get("type") != "socratic":
        return None
    steps = []
    for s in d.get("steps") or []:
        if not isinstance(s, dict):
            continue
        steps.append({
            "q": str(s.get("q") or ""),
            "hint": str(s.get("hint") or ""),
            "point": str(s.get("point") or ""),
        })
    return {"type": "socratic", "steps": steps} if steps else None


def load_questions(reviewed_ids, pending_review_ids):
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
        q_type = meta["type"]
        personal = _truthy(meta.get("needs_personal_input"))
        sections = []
        diagrams = []
        for sec in parse_sections(body.strip()):
            content, sec_diagrams = extract_diagrams(sec["content"])
            stage = canonical_stage(sec["title"], q_type, personal)
            sections.append({
                "title": sec["title"],
                "html": md_to_html(content),
                "diagram": normalize_diagram(sec_diagrams[0]) if sec_diagrams else None,
                **stage,
            })
            diagrams.extend(sec_diagrams)
        meta["sections"] = sections
        meta["answer_outline"] = _answer_outline(q_type, personal, sections)
        meta["diagrams"] = [normalize_diagram(d) for d in diagrams if normalize_diagram(d)]
        stage_keys = {str(sec.get("stage_key") or "") for sec in sections}
        has_coach = "coach" in stage_keys
        answer_len = _answer_text_length(meta)
        has_stages = REQUIRED_TECHNICAL_STAGES.issubset(stage_keys)
        if answer_len < 120 or (q_type == "technical" and not has_stages):
            content_status = "needs_answer"
        elif meta["id"] in reviewed_ids:
            content_status = "reviewed"
        elif meta["id"] in pending_review_ids or has_coach:
            content_status = "needs_review"
        else:
            content_status = "reviewed"
        meta["content_status"] = content_status
        meta["training_eligible"] = bool(
            content_status == "reviewed"
            and answer_len >= 120
            and (q_type != "technical" or has_stages)
            and not personal
        )
        meta["has_coach"] = has_coach
        items.append(meta)
    items.sort(key=lambda q: (DOMAIN_ORDER.index(q["domain"]) if q["domain"] in DOMAIN_ORDER else 99, q["id"]))
    return items


def load_interviews(questions, link_entries):
    idir = CONTENT / "interviews"
    questions_by_id = {str(q["id"]): q for q in questions}
    confirmed_by_interview = {}
    for entry in link_entries or []:
        iid = str((entry or {}).get("interview_id") or "")
        if not iid:
            continue
        confirmed_by_interview[iid] = [
            c for c in ((entry or {}).get("candidates") or [])
            if c.get("confirmed") and str(c.get("question_id")) in questions_by_id
        ]
    items = []
    for md in sorted(idir.rglob("*.md")):
        meta, body = read_md(md)
        meta = dict(meta)
        meta.setdefault("interview_id", md.stem)
        meta["body_html"] = md_to_html(body.strip())
        sections = []
        flat_items = []
        note_lines = []
        parsed_sections = parse_interview_sections(body.strip())
        for sec in parsed_sections:
            sec_items = extract_items(sec["content"], legacy_only=True)
            for it in sec_items:
                it["section"] = sec["title"] or ""
            note_lines.extend(line for line in sec["content"].split("\n") if line.strip().startswith(">"))
            sections.append({
                "title": sec["title"],
                "html": md_to_html(sec["content"]),
                "items": sec_items,
            })
            flat_items.extend(sec_items)

        # 只有整份面经用旧解析器得不到题目时，才启用 OCR / 散文补解析。
        if not flat_items:
            flat_items = []
            for parsed_sec, rendered in zip(parsed_sections, sections):
                sec_items = extract_items(parsed_sec["content"])
                for it in sec_items:
                    it["section"] = rendered["title"] or ""
                rendered["items"] = sec_items
                flat_items.extend(sec_items)

        if not flat_items:
            for parsed_sec, rendered in zip(parsed_sections, sections):
                if not parsed_sec["content"].strip():
                    continue
                prose_html = md_to_html(_strip_interview_notes(parsed_sec["content"]))
                prose_item = {
                    "n": 0,
                    "kind": "prose",
                    "title": "原文记录",
                    "text": prose_html,
                    "section": rendered["title"] or "",
                }
                rendered["items"].append(prose_item)
                flat_items.append(prose_item)

        meta["sections"] = sections
        meta["items"] = flat_items
        meta["notes_html"] = md_to_html("\n".join(note_lines))
        linked = []
        seen = set()
        for q in questions:
            for s in (q.get("sources") or []):
                if s.get("interview_id") == meta["interview_id"] and q["id"] not in seen:
                    seen.add(q["id"])
                    linked.append({
                        "id": q["id"],
                        "question": q["question"],
                        "domain": q["domain"],
                        "type": q["type"],
                        "diagrams": len(q.get("diagrams") or []),
                        "score": 1.0,
                        "match_source": "sources",
                    })
        for candidate in confirmed_by_interview.get(meta["interview_id"], []):
            qid = str(candidate.get("question_id"))
            if qid in seen:
                continue
            q = questions_by_id[qid]
            seen.add(qid)
            linked.append({
                "id": qid,
                "question": q["question"],
                "domain": q["domain"],
                "type": q["type"],
                "diagrams": len(q.get("diagrams") or []),
                "score": float(candidate.get("score") or 0.0),
                "match_source": "mapping",
            })
        linked.sort(key=lambda x: (-float(x.get("score") or 0.0), str(x.get("id"))))
        for idx, item in enumerate(linked):
            item["alternatives"] = [
                {"id": x["id"], "question": x["question"], "score": x["score"]}
                for x in linked[idx + 1:idx + 3]
            ]
        meta["linked"] = linked
        items.append(meta)
    items.sort(key=lambda x: x.get("date", ""), reverse=True)
    return items


def load_systems():
    sdir = CONTENT / "systems"
    items = []
    for md in sorted(sdir.rglob("*.md")):
        meta, body = read_md(md)
        meta = dict(meta)
        meta.setdefault("id", md.stem)
        meta.setdefault("title", md.stem)
        meta.setdefault("domain", "system")
        meta.setdefault("topic", [])
        meta.setdefault("difficulty", 0)
        stages = []
        for sec in parse_system_stages(body.strip()):
            content, diagrams = extract_diagrams(sec["content"])
            content, socratics = extract_socratic(content)
            stages.append({
                "title": sec["title"],
                "html": md_to_html(content),
                "diagram": normalize_diagram(diagrams[0]) if diagrams else None,
                "socratic": normalize_socratic(socratics[0]) if socratics else None,
            })
        meta["stages"] = stages
        meta["diagram_count"] = sum(1 for s in stages if s["diagram"])
        items.append(meta)
    items.sort(key=lambda x: (DOMAIN_ORDER.index(x["domain"]) if x["domain"] in DOMAIN_ORDER else 99, x["id"]))
    return items


def _answer_text_length(q) -> int:
    sections = q.get("sections") or []
    markup = "".join(str(sec.get("html") or "") for sec in sections if isinstance(sec, dict))
    if not markup:
        markup = str(q.get("body_html") or "")
    text = html.unescape(re.sub(r"<[^>]+>", " ", markup))
    return len(re.sub(r"\s+", "", text))


def validate_payload(questions, interviews):
    """输出内容结构诊断，构建过程不因内容问题中断。"""
    seen_ids = set()
    duplicate_ids = 0
    invalid_ids = 0
    unknown_source_types = 0
    knowledge_with_sources = 0
    short_technical_answers = 0
    missing_canonical_stages = 0
    coach_questions = 0
    needs_review = 0
    needs_answer = 0

    for q in questions:
        qid = str(q.get("id") or "")
        if qid in seen_ids:
            duplicate_ids += 1
        else:
            seen_ids.add(qid)
        if not QUESTION_ID_RE.fullmatch(qid):
            invalid_ids += 1
        source_type = str(q.get("source_type") or "")
        if source_type not in VALID_SOURCE_TYPES:
            unknown_source_types += 1
        if source_type == "knowledge" and q.get("sources"):
            knowledge_with_sources += 1
        if str(q.get("type") or "").strip().lower() == "technical":
            if _answer_text_length(q) < 120:
                short_technical_answers += 1
            stage_keys = {
                str(sec.get("stage_key") or "")
                for sec in (q.get("sections") or [])
                if isinstance(sec, dict)
            }
            if not REQUIRED_TECHNICAL_STAGES.issubset(stage_keys):
                missing_canonical_stages += 1
        if q.get("has_coach"):
            coach_questions += 1
        status = str(q.get("content_status") or "")
        if status == "needs_review":
            needs_review += 1
        elif status == "needs_answer":
            needs_answer += 1

    empty_interviews = sum(1 for iv in interviews if not (iv.get("items") or []))
    unlinked_interviews = sum(1 for iv in interviews if not (iv.get("linked") or []))
    summary = {
        "duplicate_ids": duplicate_ids,
        "invalid_ids": invalid_ids,
        "unknown_source_types": unknown_source_types,
        "knowledge_with_sources": knowledge_with_sources,
        "short_technical_answers": short_technical_answers,
        "missing_canonical_stages": missing_canonical_stages,
        "empty_interviews": empty_interviews,
        "coach_questions": coach_questions,
        "needs_review": needs_review,
        "needs_answer": needs_answer,
        "unlinked_interviews": unlinked_interviews,
    }
    print(
        "校验：重复 ID %d / 非法 ID %d / 未知 source_type %d / "
        "knowledge 带 sources %d / technical 答案正文<120字 %d / "
        "缺 canonical stage %d / 0 items 面经 %d / coach 题卡 %d / "
        "待复核 %d / 待补答案 %d / 无关联面经 %d"
        % (
            duplicate_ids,
            invalid_ids,
            unknown_source_types,
            knowledge_with_sources,
            short_technical_answers,
            missing_canonical_stages,
            empty_interviews,
            coach_questions,
            needs_review,
            needs_answer,
            unlinked_interviews,
        )
    )
    return summary


def main():
    review = load_manifest(REVIEW_MANIFEST)
    links = load_manifest(LINK_MANIFEST)
    reviewed_ids = set(str(x) for x in (review.get("reviewed_ids") or []))
    pending_ids = set(str(x) for x in (review.get("pending_review_ids") or []))
    questions = load_questions(reviewed_ids, pending_ids)
    interviews = load_interviews(questions, links.get("links") or [])
    systems = load_systems()
    validate_payload(questions, interviews)
    domains = {}
    for q in questions:
        d = q["domain"]
        domains[d] = domains.get(d, 0) + 1
    stats = {
        "questions": len(questions),
        "interviews": len(interviews),
        "systems": len(systems),
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
        "systems": systems,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    js = "window.OS_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2, default=str) + ";\n"
    OUT.write_text(js, encoding="utf-8")
    print("生成 %s（%d 题 / %d 面经）" % (OUT, stats["questions"], stats["interviews"]))


if __name__ == "__main__":
    main()
