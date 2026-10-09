---
id: FLINK-0215
type: technical
question: 解释Flink中的动态表(Dynamic Table)概念及其工作原理。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

动态表随流持续变化，是流查询的抽象。

# 参考回答

动态表是把数据流看成的持续更新的表，查询结果是另一个动态表。流和表可以互相转换，这是 Flink SQL 的核心。

# 追问

- 流和表怎么转换？
