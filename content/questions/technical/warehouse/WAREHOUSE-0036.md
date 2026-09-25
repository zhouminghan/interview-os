---
id: WAREHOUSE-0036
type: technical
question: 口径变更时为什么新建表切换依赖，而不是直接改原表
topic: [warehouse, metrics, change]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-shopee-data-dev
    company: 虾皮
    position: 数据开发（二面）
    date: 2026-09-24
---

# 一句话

新建表可回滚、可灰度、不污染历史，直接改原表会破坏历史和下游。

# 30 秒回答

新建表 + 切依赖：保留旧版本可回滚，新旧并行灰度对比，不污染历史，下游平滑切换。直接改原表：历史被覆盖、无法回滚、下游影响面大。

# 1 分钟回答

- 新建表：旧表保留、可回滚、可对比、灰度切换
- 原表改造：历史丢失、回滚难、下游风险大
- 流程：新建 -> 对账 -> 切换依赖 -> 观察 -> 下线旧表

# 追问

- 切换依赖具体怎么做？
- 旧表保留多久？
