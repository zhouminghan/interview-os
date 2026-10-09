---
id: FLINK-0259
type: technical
question: 解释FlinkSQL中的Temporal Table Join及其应用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

关联版本表，取某个时间的维度快照。

# 参考回答

Temporal Table Join 是关联版本化维表，按事件时间取对应版本的维度数据。适合缓慢变化维的场景，关联历史准确的维度。

# 追问

- temporal join 和普通 join 区别？
