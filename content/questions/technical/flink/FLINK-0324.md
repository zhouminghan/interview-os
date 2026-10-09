---
id: FLINK-0324
type: technical
question: 什么是FlinkSQL中的动态表(Dynamic Table)？如何使用它？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

动态表是持续更新的表，代表流的查询结果。

# 参考回答

动态表把数据流看成不断更新的表，SQL 查询结果是另一个动态表，输出时转回流或写到外部。流和表互相转换，这是 Flink SQL 的核心思想。

# 追问

- 流和表怎么转换？
