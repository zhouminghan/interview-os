---
id: SPARK-0183
type: technical
question: 如何实现Structured Streaming的自定义聚合？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 mapGroupsWithState 或 UDAF 做有状态聚合。

# 参考回答

自定义聚合用 mapGroupsWithState 做任意状态聚合，或写 UDAF。有状态聚合要注意状态清理和 checkpoint。

# 追问

- mapGroupsWithState 怎么用？
