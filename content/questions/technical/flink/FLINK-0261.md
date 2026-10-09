---
id: FLINK-0261
type: technical
question: 在FlinkSQL中如何实现自定义窗口聚合函数？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

继承 WindowFunction 或 AggregateFunction。

# 参考回答

自定义窗口聚合用 AggregateFunction 做增量聚合，或 WindowFunction 做全量窗口处理。复杂窗口逻辑用 process 处理。

# 追问

- 增量聚合和全量怎么选？
