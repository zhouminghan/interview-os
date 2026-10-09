---
id: FLINK-0274
type: technical
question: 什么是FlinkSQL中的状态(State)？它如何在查询中使用？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

状态是聚合和 join 的中间结果，引擎自动管理。

# 参考回答

Flink SQL 里的状态是聚合、join 保存的中间结果，引擎自动管理，不用手动管。状态大小要监控，配 TTL 清理。

# 追问

- SQL 状态和 DataStream 状态一样吗？
