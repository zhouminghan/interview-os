---
id: FLINK-0280
type: technical
question: 什么是FlinkSQL中的Queryable State？如何使用它？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

外部直接查运行中的状态。

# 参考回答

Queryable State 允许外部查询 Flink 运行中的状态，SQL 里用得少，主要在 DataStream 用。实时查某个 key 的聚合值。

# 追问

- Queryable State 有什么风险？
