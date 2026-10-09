---
id: FLINK-0306
type: technical
question: 如何在FlinkSQL中使用Temporal Table Join关联变化的维度表？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 FOR SYSTEM_TIME AS OF 关联版本化维表。

# 参考回答

Temporal Table Join 用 FOR SYSTEM_TIME AS OF 时间点，关联维表在该时间点的版本。维表要声明主键和时间，记录每次变化。适合缓慢变化维，取历史准确的维度。

# 追问

- 维表怎么变成时态表？
