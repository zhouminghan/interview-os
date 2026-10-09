---
id: FLINK-0260
type: technical
question: 如何在FlinkSQL中实现流与维度表的关联？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 temporal join 或 lookup join 关联维表。

# 参考回答

流和维度表关联用 temporal join 关联版本表，或用 lookup join 实时查外部维表。维表小可以缓存，大的走外部查询。

# 追问

- lookup join 怎么缓存维表？
