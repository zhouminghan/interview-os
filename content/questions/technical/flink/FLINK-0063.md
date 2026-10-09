---
id: FLINK-0063
type: technical
question: Flink中的可查询状态（Queryable State）是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

外部直接查询 Flink 的运行时状态。

# 参考回答

Queryable State 允许外部系统直接查询 Flink 正在运行的状态，不用额外写出去。比如实时查某个 key 的当前聚合值。但使用要小心，别暴露太多状态影响性能。

# 追问

- 为什么现在用得少？
