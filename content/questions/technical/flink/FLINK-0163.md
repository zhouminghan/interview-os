---
id: FLINK-0163
type: technical
question: 如何处理Flink作业中的数据倾斜导致的性能问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加盐、两阶段聚合、热点分散。

# 参考回答

数据倾斜导致的性能问题，用加盐打散热点 key、两阶段聚合、local keyBy 预聚合。看子任务处理量分布定位倾斜。

# 追问

- 怎么定位倾斜的子任务？
