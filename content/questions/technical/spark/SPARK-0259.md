---
id: SPARK-0259
type: technical
question: 什么是 Spark 中的 Shuffle 操作？
difficulty: 0
topic: []
source_type: knowledge
---

**Shuffle 操作**用于在 Spark 中将数据重新分布到多个分区中，是一个成本高昂且复杂的操作。通常情况下，Spark 中的单个任务操作一个分区中的元素。要执行 Shuffle，必须对**所有分区中的所有元素**运行操作，也称为**全对全（all-to-all）操作**。

---
