---
id: SPARK-0195
type: technical
question: 如何实现Structured Streaming的自定义状态管理？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 mapGroupsWithState 管理自定义状态。

# 参考回答

自定义状态用 mapGroupsWithState，按 key 维护任意状态，配合超时清理。状态要可序列化并配合 checkpoint。

# 追问

- 状态超时清理怎么配？
