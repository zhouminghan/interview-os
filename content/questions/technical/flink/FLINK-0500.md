---
id: FLINK-0500
type: technical
question: 看到你用 Flink，简要介绍一下 Flink？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 是一个实时计算框架。它和 Spark 都是流批一体化的计算框架。Flink 提供有界流和无界流计算。**有界流**实际上是指 Flink 在大多数情况下将数据处理视为流，批是有边界情况的一种特殊处理——即有边界的数据称为有界流，没有边界的数据称为无界流，也就是实时无限生成的数据。

Flink 的主要外部 API 有：DataSet API、DataStream API、Table API、图计算、机器学习。它提供 Java、Scala 和 Python 两种语言接口。

---
