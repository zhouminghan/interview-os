---
id: FLINK-0271
type: technical
question: 解释FlinkSQL中的时态表(Temporal Table)概念及其应用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

带版本的表，记录数据随时间的变化。

# 参考回答

时态表是带时间版本的表，记录每个版本的数据，能查历史某时间点的状态。用于 temporal join 关联历史维度。

# 追问

- 时态表和普通维表区别？
