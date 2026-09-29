---
id: WAREHOUSE-0090
type: technical
question: 数据血缘有什么价值和用途
topic: [warehouse, lineage]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-11-bytedance-douyin-ecommerce
    company: 字节跳动
    position: 大数据开发（实习）
    date: 2026-05-11
---

# 一句话

血缘回答「数据从哪来到哪去」，价值在变更影响评估、回溯定位、口径追踪、任务下线前置检查和 AI 上下文。

# 30 秒回答

五大用途：改字段前评估下游影响、T+1 出问题快速定位回溯起点、口径溯源回答「指标怎么算的」、任务下线前确认无下游依赖、给 AI 写 SQL 提供上下游上下文。

# 1 分钟回答

- 变更影响评估：改 DWD 字段先看多少 DWS/ADS 依赖
- 数据回溯：出问题从目标表自动出依赖图，定位回溯起点和顺序
- 字段级口径追踪：从 ADS 字段一路追到 ODS 来源
- 任务下线前置检查：确认无下游依赖再下线
- AI Agent 上下文：给血缘信息后生成的 SQL 更贴合真实结构，减少幻觉

# 追问

- 表级血缘和字段级血缘有什么区别？
- 血缘准确性怎么保证？
