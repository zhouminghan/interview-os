---
id: FLINK-0039
type: technical
question: Flink中的Transformation算子有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

map、filter、keyBy、window、join 等。

# 参考回答

转换算子有 map、flatMap、filter、keyBy、reduce、window、join、union。keyBy 是分组的核心，会产生 keyed stream。

# 追问

- keyBy 和 groupBy 的区别？
