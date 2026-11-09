#!/usr/bin/env python3
"""P1 面经反哺：为无关联题卡的面经生成候选映射。

候选由题面 bigram 相似度、topic 重合和领域提示加权得到。
高分候选默认 confirmed: true，低分候选保留为未确认，供人工复核。
"""
import datetime
import json
import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "web" / "assets" / "js" / "data.js"
OUT = ROOT / "content" / "interview-links.yml"
ARCHIVE = ROOT / "content" / "source-links-archive.yml"
REPORT = ROOT / "docs" / "interview-link-review-2026-11-09.md"

DOMAIN_HINTS = {
    "spark": ["spark", "shuffle", "rdd", "dataframe"],
    "flink": ["flink", "checkpoint", "watermark", "状态"],
    "warehouse": ["数仓", "分层", "dwd", "dws", "维度", "建模"],
    "storage": ["hive", "hdfs", "parquet", "orc", "存储", "分区"],
    "starrocks": ["starrocks", "olap", "物化视图"],
    "llm": ["大模型", "llm", "agent", "rag", "微调", "蒸馏"],
    "sql": ["sql", "join", "窗口", "开窗", "聚合"],
    "lakehouse": ["iceberg", "hudi", "delta", "湖"],
    "hdfs": ["hdfs", "namenode", "datanode"],
    "platform": ["调度", "血缘", "平台", "治理"],
    "system": ["性能", "调优", "资源", "瓶颈"],
    "network": ["网络", "tcp", "http", "超时"],
    "algorithm": ["算法", "排序", "复杂度", "手撕"],
    "statistics": ["统计", "指标", "口径", "抽样"],
    "ml": ["机器学习", "特征", "模型", "训练"],
    "project": ["项目", "介绍", "实习", "offer", "反问", "薪资"],
}


def load_data():
    raw = DATA.read_text(encoding="utf-8")
    return json.loads(raw.split("=", 1)[1].strip().rstrip(";"))


def load_yaml(path):
    if not path.exists():
        return {}
    try:
        return yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    except Exception:
        return {}


def norm(text):
    text = str(text or "").lower()
    text = re.sub(r"[^一-龥a-z0-9]+", "", text)
    return text


def bigrams(text):
    s = norm(text)
    return {s[i:i + 2] for i in range(len(s) - 1)}


def jaccard(a, b):
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)


def topic_score(q, interview_text):
    topics = {norm(t) for t in (q.get("topic") or []) if norm(t)}
    if not topics:
        return 0.0
    hay = norm(interview_text)
    return sum(1 for t in topics if t and t in hay) / len(topics)


def domain_bonus(q, interview_text):
    hay = norm(interview_text)
    hints = DOMAIN_HINTS.get(str(q.get("domain")), [])
    return 1.0 if any(norm(h) and norm(h) in hay for h in hints) else 0.0


def main():
    data = load_data()
    questions = [q for q in data["questions"] if str(q.get("type")) == "technical"]
    q_bigrams = {str(q["id"]): bigrams(str(q.get("question")) + " " + " ".join(str(t) for t in (q.get("topic") or []))) for q in questions}
    existing = load_yaml(OUT)
    archive = load_yaml(ARCHIVE)
    existing_links = {str(e.get("interview_id")): e for e in (existing.get("links") or [])}
    archive_by_iid = {}
    for item in (archive.get("archived_source_links") or []):
        iid = str(item.get("interview_id") or "")
        qid = str(item.get("question_id") or "")
        if not iid or not qid:
            continue
        archive_by_iid.setdefault(iid, []).append({
            "question_id": qid,
            "score": float(item.get("score") or 1.0),
            "reason": str(item.get("reason") or "archive:sources"),
            "confirmed": True,
        })
    links = []
    confirmed_total = 0
    newly_generated = 0

    for iv in data["interviews"]:
        iid = str(iv.get("interview_id"))
        candidates = []
        seen_q = set()
        for candidate in archive_by_iid.get(iid, []):
            qid = candidate["question_id"]
            if qid in seen_q:
                continue
            candidates.append(dict(candidate))
            seen_q.add(qid)
        for candidate in ((existing_links.get(iid) or {}).get("candidates") or []):
            qid = str(candidate.get("question_id") or "")
            if not qid or qid in seen_q:
                continue
            candidates.append(dict(candidate))
            seen_q.add(qid)

        parts = [iv.get("company"), iv.get("business"), iv.get("position"), iv.get("round")]
        parts += [str(it.get("text") or "") for it in (iv.get("items") or [])]
        interview_text = " ".join(str(p or "") for p in parts)
        if not any(c.get("confirmed") for c in candidates):
            newly_generated += 1
            iv_bigrams = bigrams(interview_text)
            scored = []
            for q in questions:
                qid = str(q["id"])
                b = jaccard(iv_bigrams, q_bigrams[qid])
                t = topic_score(q, interview_text)
                d = domain_bonus(q, interview_text)
                score = round(min(1.0, 0.65 * b + 0.25 * t + 0.10 * d), 4)
                scored.append((score, qid, b, t, d))
            scored.sort(reverse=True)
            top = [x for x in scored[:3] if x[1] not in seen_q]
            confirmed = [x for x in top if x[0] >= 0.05]
            if not confirmed and top:
                confirmed = top[:1]
            confirmed_ids = {x[1] for x in confirmed}
            for score, qid, b, t, d in top:
                candidates.append({
                    "question_id": qid,
                    "score": score,
                    "reason": f"bigram={b:.3f}; topic={t:.3f}; domain={d:.1f}",
                    "confirmed": qid in confirmed_ids,
                })
                seen_q.add(qid)
        confirmed_total += sum(1 for c in candidates if c.get("confirmed"))
        links.append({
            "interview_id": iid,
            "candidates": candidates,
        })

    payload = {
        "generated_at": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "policy": "confirmed=true 的候选由 build.py 合并进 linked；confirmed=false 仅作为复核候选",
        "links": links,
    }
    OUT.write_text(yaml.safe_dump(payload, sort_keys=False, allow_unicode=True, default_flow_style=False), encoding="utf-8")

    sample = [x["interview_id"] for x in links[:12]]
    report = "\n".join([
        "# 2026-11-09 P1 面经关联候选复核记录",
        "",
        f"- 面经总数：{len(data['interviews'])} 篇；归档来源关系：{sum(len(v) for v in archive_by_iid.values())} 条。",
        f"- 已生成候选映射：{len(links)} 篇；自动确认 {confirmed_total} 条候选；本次新增计算 {newly_generated} 篇。",
        "- 归档来源关系来自 P0 基线提交 `c9921a4`，用于保留题卡重写后移除的 `sources` 关联。",
        "- 自动确认规则：候选综合分不低于 0.05；若前三项都低于阈值，则至少确认最高分一项，避免右栏继续大面积空置。",
        "- 复核要求：自动确认结果仍需用户抽检，重点看题面语义是否真的对应；未确认候选不会进入 `linked`。",
        "- 约束：不改写题卡 `sources`，不改写原始面经，不把 AI 匹配写成面试官原话。",
        f"- 映射文件：`content/interview-links.yml`；示例面经：{', '.join(sample)}。",
    ])
    REPORT.write_text(report.rstrip() + "\n", encoding="utf-8")
    print(f"生成 {len(links)} 篇面经候选，自动确认 {confirmed_total} 条，新增计算 {newly_generated} 篇")


if __name__ == "__main__":
    main()
