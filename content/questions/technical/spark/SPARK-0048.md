---
id: SPARK-0048
type: technical
question: Spark的核心组件有哪些？它们各自的作用是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Spark Core、Spark SQL、Streaming、MLlib、GraphX。

# 参考回答

核心组件有 Spark Core 管 RDD 和调度，Spark SQL 做结构化查询，Spark Streaming 做流处理，MLlib 做机器学习，GraphX 做图计算。现在流处理主要用 Structured Streaming。

# 追问

- Structured Streaming 和 Spark Streaming 的区别？
