---
id: SPARK-0271
type: technical
question: 什么是 Spark 中的惰性求值（Lazy Evaluation）？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 使用**惰性求值**作为性能优化技术。在惰性求值中，转换不会立即应用到 RDD，Spark 记录要应用到 RDD 的转换，一旦调用**行动（Action）**，Spark 才会执行所有转换。由于 Spark 不基于转换立即执行，因此称为惰性求值。

**惰性求值的优势**：
- 提高可管理性
- 节省计算开销，提高系统速度
- 减少时间和空间复杂度
- 通过减少查询次数来提供优化

---
