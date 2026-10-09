---
id: FLINK-0308
type: technical
question: 如何在FlinkSQL中实现有状态的自定义函数？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 UDAF 或在 DataStream 里用 ProcessFunction。

# 参考回答

SQL 里的有状态自定义函数主要是 UDAF，它维护累加器状态。更复杂的有状态逻辑，建议转 DataStream 用 ProcessFunction 和 keyed state 实现，比硬在 SQL UDF 里做简单。

# 追问

- UDAF 的状态怎么管理？
