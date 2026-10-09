---
id: FLINK-0047
type: technical
question: 解释Flink中的Dynamic Tables概念。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

动态表是持续变化的表，流查询的结果。

# 参考回答

动态表就是随着数据流不断更新的表，Flink SQL 把流当成表处理，查询结果是另一个动态表。输出时转回流或写到外部。

# 追问

- 动态表和普通表什么区别？
