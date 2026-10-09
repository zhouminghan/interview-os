---
id: FLINK-0054
type: technical
question: Flink中有哪些类型的状态？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Keyed State 和 Operator State 两大类。

# 参考回答

Flink 状态分 Keyed State 和 Operator State。Keyed State 按 key 隔离，跟 keyBy 配合；Operator State 是算子级别，不按 key 分。还有 Broadcast State 广播到所有实例。

# 追问

- 三类状态分别什么场景用？
