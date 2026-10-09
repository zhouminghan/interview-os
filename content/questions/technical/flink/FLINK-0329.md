---
id: FLINK-0329
type: technical
question: 解释FlinkSQL中的维表关联(Dimension Table Join)实现原理及优化策略。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

lookup join 查外部维表，temporal join 关联版本表。

# 参考回答

维表关联分 lookup join 和 temporal join。lookup 实时查外部维表，靠缓存减少查询；temporal 关联版本表取历史快照。优化是缓存维表、控制维表大小。

# 追问

- 维表太大怎么办？
