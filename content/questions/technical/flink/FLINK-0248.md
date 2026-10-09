---
id: FLINK-0248
type: technical
question: 如何在FlinkSQL中创建和使用自定义UDAF？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

继承 AggregateFunction，实现累加和结果。

# 参考回答

UDAF 继承 AggregateFunction，实现累加器、accumulate 累加、getResult 返回结果。比标量 UDF 复杂，用于自定义聚合。

# 追问

- UDAF 要实现哪些方法？
