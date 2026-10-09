---
id: SPARK-0144
type: technical
question: 如何实现Spark SQL的自定义聚合函数？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

继承 UserDefinedAggregateFunction 或 Aggregator。

# 参考回答

自定义聚合函数要继承 UserDefinedAggregateFunction 或类型安全的 Aggregator，实现 update、merge、evaluate 这些方法。比标量 UDF 复杂。

# 追问

- 聚合函数和标量函数实现区别？
