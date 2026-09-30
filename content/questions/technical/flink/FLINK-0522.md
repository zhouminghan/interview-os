---
id: FLINK-0522
type: technical
question: 什么是 Flink Table API？
difficulty: 0
topic: []
source_type: knowledge
---

Table API 是一个关系型 API，具有类似 SQL 的表达式语言。此 API 能够进行批处理和流处理。它与 Java 和 Scala 的 DataSet 和 DataStream API 兼容。表可以从内部 DataSet 和 DataStream 以及外部数据源生成。你可以使用此关系 API 执行连接、选择、聚合和过滤等操作。查询的语义在输入是批处理还是流处理时是相同的。

---
