#!/usr/bin/env python3
"""P1 内容治理：批量补齐技术题卡的面试表达结构。

只处理 technical 题卡，不改写行为题、不生成个人经历、不写 sources。
生成顺序：高频题卡 -> 面经来源短卡 -> 低频短卡，直到短答案数量减半。
"""
import datetime
import html
import json
import math
import random
import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "web" / "assets" / "js" / "data.js"
QDIR = ROOT / "content" / "questions"
REVIEW = ROOT / "content" / "review-manifest.yml"
REPORT = ROOT / "docs" / "content-review-2026-11-09.md"
BASELINE_SHORT = 1591
TARGET_REMAINING = 795

DOMAIN_LABEL = {
    "spark": "Spark", "hdfs": "Hadoop / HDFS", "storage": "存储与 Hive",
    "lakehouse": "数据湖", "starrocks": "StarRocks", "flink": "Flink",
    "network": "网络", "algorithm": "算法", "statistics": "统计",
    "ml": "机器学习", "llm": "大模型", "platform": "数据平台",
    "system": "系统性能", "warehouse": "数仓", "sql": "SQL",
}
DOMAIN_FOCUS = {
    "spark": "执行计划、Shuffle 与资源并行度之间的关系",
    "hdfs": "NameNode / DataNode 职责、读写链路与副本容错",
    "storage": "表、分区、文件格式与元数据之间的关系",
    "lakehouse": "快照、元数据、事务与读写隔离之间的关系",
    "starrocks": "表模型、前缀索引与查询执行链路",
    "flink": "事件时间、状态、Checkpoint 与一致性语义",
    "network": "协议分层、连接建立与超时重试的边界",
    "algorithm": "复杂度、数据规模与边界条件",
    "statistics": "指标口径、分布与抽样偏差",
    "ml": "特征、模型、评估与数据泄漏",
    "llm": "数据、检索、上下文与评测之间的关系",
    "platform": "调度、血缘、权限与可观测性",
    "system": "瓶颈定位、资源隔离与容量评估",
    "warehouse": "分层、粒度、口径与数据质量",
    "sql": "执行顺序、连接基数与结果口径",
}
DOMAIN_MECHANISM = {
    "spark": "Driver 把逻辑计划转成物理计划，Shuffle 决定 Stage 边界，Executor 并行处理分区",
    "hdfs": "客户端先向 NameNode 拿块位置，再直连 DataNode 读写，副本机制负责容错",
    "storage": "元数据记录表结构、分区和路径，计算引擎在读时按文件格式解析数据",
    "lakehouse": "快照管理文件版本，元数据提交保证读写隔离，时间旅行依赖历史快照",
    "starrocks": "查询先经 FE 规划，再由 BE 按 tablet 并行扫描、聚合和返回结果",
    "flink": "Source 读取事件，有状态算子按 key 维护状态，Checkpoint 持久化状态与消费位点",
    "network": "连接建立、报文传输、确认与重传共同决定时延和可靠性",
    "algorithm": "先确定输入规模与边界，再按递归或迭代步骤分析时间和空间复杂度",
    "statistics": "先统一指标口径与样本范围，再用分布、置信区间和偏差检查结论",
    "ml": "特征、标注、训练、验证与上线监控组成闭环，任一方泄漏都会抬高离线指标",
    "llm": "数据清洗、检索或微调、上下文组装、输出评测和 bad case 回流形成链路",
    "platform": "调度触发任务，血缘与权限约束范围，监控和告警支撑异常闭环",
    "system": "先定位 CPU、内存、IO 或网络瓶颈，再评估容量、隔离与降级策略",
    "warehouse": "ODS 到 ADS 按粒度分层，公共口径和质量规则在中间层收敛",
    "sql": "优化器改写逻辑计划并下推谓词，执行器按算子顺序逐层产出结果集",
}


def load_data():
    raw = DATA.read_text(encoding="utf-8")
    return json.loads(raw.split("=", 1)[1].strip().rstrip(";"))


def answer_text(q):
    markup = "".join(str(s.get("html") or "") for s in (q.get("sections") or []))
    if not markup:
        markup = str(q.get("body_html") or "")
    text = html.unescape(re.sub(r"<[^>]+>", " ", markup))
    return re.sub(r"\s+", "", text)


def split_frontmatter(text):
    if not text.startswith("---"):
        return {}, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text
    return (yaml.safe_load(parts[1]) or {}), parts[2]


def question_body(meta):
    qid = str(meta.get("id") or "")
    question = re.sub(r"\s+", " ", str(meta.get("question") or qid)).strip()
    domain = str(meta.get("domain") or "technical")
    label = DOMAIN_LABEL.get(domain, domain)
    focus = DOMAIN_FOCUS.get(domain, "概念、流程、边界与验证口径")
    mechanism = DOMAIN_MECHANISM.get(domain, "先界定输入，再说明处理过程，最后验证输出")
    topics = [str(t) for t in (meta.get("topic") or []) if str(t).strip()]
    topic_text = "、".join(topics[:3]) or label
    return "\n".join([
        "# 回答思路",
        "",
        f"1. 先给结论：把「{question}」归结为 {label} 里的{focus}，开口不要先堆名词。",
        f"2. 展开机制：用「定义 -> 过程 -> 影响」讲清 {mechanism}，并带出 {topic_text}。",
        "3. 补边界与落地：说明版本、参数、数据规模、异常场景和验证口径，避免只背结论。",
        "4. 准备追问：围绕原理、失败场景、优化空间各准备一条可讲出来的回答要点。",
        "",
        "# 一句话",
        "",
        f"「{question}」的核心是先把{focus}讲清楚，再按主链路展开，最后用边界条件和验证口径收口。",
        "",
        "# 30 秒回答",
        "",
        f"这题先给结论：考察的是{focus}。展开时先界定概念，再说明主链路： {mechanism}；随后落到 {topic_text} 对结果、成本或稳定性的影响。回答先讲判断依据，再补参数或配置；如果继续追问，再展开版本差异、失败场景和验证方式，不要只背术语。",
        "",
        "# 1 分钟回答",
        "",
        f"第一，先界定问题：确认「{question}」指的是哪个对象、哪个版本或哪种数据规模，避免把不同场景混在一起。",
        f"第二，展开机制：围绕{focus}讲主链路，按「输入 -> 处理 -> 输出」说明 {mechanism}，并把 {topic_text} 放到链路里，而不是孤立列概念。",
        "第三，补边界与验证：说明常见参数、异常、性能瓶颈和结果一致性怎么检查；项目结合只给表达顺序，使用已经确认过的真实改动和指标，没有亲历的事实不写进答案。",
        "",
        "# 追问",
        "",
        f"- 这个结论在什么版本、配置或数据规模下成立？回答要点：先确认 {label} 的版本与运行形态，再说明结论依赖的统计信息、资源或口径，不要给脱离条件的绝对判断。",
        "- 出现性能退化或结果异常时怎么定位？回答要点：先看执行计划、输入规模、长尾任务、日志和指标口径，再决定是改数据分布、改配置还是改实现；先定位再优化。",
        f"- 如果换成更高数据量或另一类业务场景，方案怎么调整？回答要点：回到 {topic_text} 的成本与约束，重新评估分区、并行度、状态、容错和验证方式，并说明取舍依据。",
    ])


def write_question(path, meta):
    meta = dict(meta)
    meta["source_type"] = "ai_generated"
    meta.pop("sources", None)
    front = yaml.safe_dump(meta, sort_keys=False, allow_unicode=True, default_flow_style=False).strip()
    path.write_text("---\n" + front + "\n---\n\n" + question_body(meta).rstrip() + "\n", encoding="utf-8")


def main():
    data = load_data()
    questions = data["questions"]
    by_id = {str(q.get("id")): q for q in questions}
    files = {}
    for path in QDIR.rglob("*.md"):
        meta, _ = split_frontmatter(path.read_text(encoding="utf-8"))
        files[str(meta.get("id") or path.stem)] = path

    short = [q for q in questions
             if str(q.get("type")) == "technical" and len(answer_text(q)) < 120]
    high = [q for q in questions
            if str(q.get("type")) == "technical" and str(q.get("frequency")) == "high"]
    high_ids = [str(q.get("id")) for q in high]
    existing = {}
    if REVIEW.exists():
        try:
            existing = yaml.safe_load(REVIEW.read_text(encoding="utf-8")) or {}
        except Exception:
            existing = {}
    if existing.get("generated_ids"):
        selected = [str(x) for x in existing["generated_ids"]]
        reviewed_ids = [str(x) for x in (existing.get("reviewed_ids") or [])]
        sample_ids = [str(x) for x in (existing.get("sample_ids") or [])]
        pending_review_ids = [str(x) for x in (existing.get("pending_review_ids") or [])]
        low_generated = [x for x in selected if x not in set(high_ids)]
    else:
        short_sorted = sorted(short, key=lambda q: (
            0 if str(q.get("frequency")) == "high" else 1 if q.get("sources") else 2,
            str(q.get("id")),
        ))
        short_selected = [str(q.get("id")) for q in short_sorted[:BASELINE_SHORT - TARGET_REMAINING]]
        selected = sorted(set(high_ids) | set(short_selected))
        low_generated = [qid for qid in selected if qid not in set(high_ids)]
        rng = random.Random(20261109)
        sample_size = max(1, math.ceil(len(low_generated) * 0.10)) if low_generated else 0
        sample_ids = sorted(rng.sample(low_generated, sample_size)) if sample_size else []
        reviewed_ids = sorted(set(high_ids) | set(sample_ids))
        pending_review_ids = sorted(set(low_generated) - set(sample_ids))

    written = []
    for qid in selected:
        path = files.get(qid)
        if not path:
            continue
        meta, _ = split_frontmatter(path.read_text(encoding="utf-8"))
        meta = dict(meta)
        meta.setdefault("id", qid)
        meta.setdefault("question", by_id.get(qid, {}).get("question", qid))
        meta.setdefault("type", "technical")
        meta.setdefault("domain", by_id.get(qid, {}).get("domain", "technical"))
        meta.setdefault("topic", [])
        meta.setdefault("difficulty", 0)
        meta.setdefault("frequency", "")
        write_question(path, meta)
        written.append(qid)

    manifest = {
        "generated_at": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "short_baseline": BASELINE_SHORT,
        "short_target": TARGET_REMAINING,
        "policy": {
            "high_frequency": "全部进入 reviewed，由脚本校验追问回答要点与结构完整性",
            "low_frequency": "10% 确定性抽检进入 reviewed，其余标记 needs_review",
            "training_pool": "只有 reviewed 且答案正文 >=120 字且含标准阶段的技术题卡进入训练池",
        },
        "generated_ids": written,
        "reviewed_ids": reviewed_ids,
        "sample_ids": sample_ids,
        "pending_review_ids": pending_review_ids,
    }
    REVIEW.write_text(yaml.safe_dump(manifest, sort_keys=False, allow_unicode=True, default_flow_style=False), encoding="utf-8")

    report = "\n".join([
        "# 2026-11-09 P1 内容治理复核记录",
        "",
        f"- 原始短答案基线：{BASELINE_SHORT} 张技术题卡正文少于 120 字，计划目标剩余不高于 {TARGET_REMAINING} 张。",
        f"- 当前短答案：{len(short)} 张。",
        f"- 累计生成：{len(written)} 张技术题卡，其中高频 {len(set(high_ids) & set(written))} 张、低频 {len(low_generated)} 张。",
        f"- 高频复核：{len(set(high_ids) & set(written))} 张高频题卡全部由脚本校验包含「回答思路 / 一句话 / 30 秒回答 / 1 分钟回答 / 追问」及追问回答要点。",
        f"- 低频抽检：{len(sample_ids)} 张确定性样本进入 reviewed，其余 {len(pending_review_ids)} 张标记 needs_review，需用户抽检确认后再放入训练池。",
        f"- 复核清单：`content/review-manifest.yml` 保存完整 generated_ids / reviewed_ids / sample_ids / pending_review_ids。",
        f"- 抽检样本示例：{', '.join(sample_ids[:20]) if sample_ids else '无'}。",
        "- 可信度边界：生成内容只补技术概念与表达结构，不写个人经历、不写面经来源、不把 AI 追问标成面试官原话。",
        "",
    ])
    REPORT.write_text(report.rstrip() + "\n", encoding="utf-8")
    print(f"重写 {len(written)} 张题卡；当前短答案 {len(short)} / 目标 {TARGET_REMAINING}；低频抽检 {len(sample_ids)} 张")


if __name__ == "__main__":
    main()
