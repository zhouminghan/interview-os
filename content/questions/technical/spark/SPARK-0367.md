---
id: SPARK-0367
type: technical
question: 什么是惰性求值（Lazy Evaluation）？
difficulty: 0
topic: []
source_type: knowledge
---

在 Spark 中，转换（Transformation）不会立即执行，而是构建 DAG 执行计划。只有在调用行动（Action）时，Spark 才基于 DAG 触发实际计算。这样可以最小化数据传输和优化执行计划。
