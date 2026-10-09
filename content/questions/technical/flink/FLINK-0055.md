---
id: FLINK-0055
type: technical
question: 什么是Keyed State和Operator State？它们有什么区别？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Keyed State 按 key 隔离，Operator State 不按 key。

# 参考回答

Keyed State 每个 key 独立一份状态，只能在 keyBy 后的 keyed stream 用；Operator State 是整个算子实例的状态，和 key 无关。Keyed State 更常用，适合聚合类状态。

# 追问

- Operator State 适合什么？
