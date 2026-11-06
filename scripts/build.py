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


def extract_items(content: str):
    """把面经里的编号题拆成条目，兼容一行多条和标准列表两种写法。"""
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
        parts = re.split(r"(?<=\S)\s+(?=\d+[.、．]\s)", s)
        if len(parts) > 1:
            for p in parts:
                m = re.match(r"^(\d+)[.、．]\s*(.*)$", p.strip())
                if m:
                    items.append({"n": int(m.group(1)), "text": m.group(2).strip()})
            continue
        m = re.match(r"^(\d+)[.、．]\s*(.*)$", s)
        if m:
            items.append({"n": int(m.group(1)), "text": m.group(2).strip()})
    return items


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
        sections = []
        diagrams = []
        for sec in parse_sections(body.strip()):
            content, sec_diagrams = extract_diagrams(sec["content"])
            sections.append({
                "title": sec["title"],
                "html": md_to_html(content),
                "diagram": normalize_diagram(sec_diagrams[0]) if sec_diagrams else None,
            })
            diagrams.extend(sec_diagrams)
        meta["sections"] = sections
        meta["diagrams"] = [normalize_diagram(d) for d in diagrams if normalize_diagram(d)]
        items.append(meta)
    items.sort(key=lambda q: (DOMAIN_ORDER.index(q["domain"]) if q["domain"] in DOMAIN_ORDER else 99, q["id"]))
    return items


def load_interviews(questions):
    idir = CONTENT / "interviews"
    items = []
    for md in sorted(idir.rglob("*.md")):
        meta, body = read_md(md)
        meta = dict(meta)
        meta.setdefault("interview_id", md.stem)
        meta["body_html"] = md_to_html(body.strip())
        sections = []
        flat_items = []
        note_lines = []
        for sec in parse_interview_sections(body.strip()):
            sec_items = extract_items(sec["content"])
            for it in sec_items:
                it["section"] = sec["title"] or ""
            note_lines.extend(line for line in sec["content"].split("\n") if line.strip().startswith(">"))
            sections.append({
                "title": sec["title"],
                "html": md_to_html(sec["content"]),
                "items": sec_items,
            })
            flat_items.extend(sec_items)
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
                    })
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


def main():
    questions = load_questions()
    interviews = load_interviews(questions)
    systems = load_systems()
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
