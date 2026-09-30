---
id: SPARK-0268
type: technical
question: 什么是 RDD 血缘（Lineage）？
difficulty: 0
topic: []
source_type: knowledge
---

**RDD Lineage** 是一个 RDD 的所有父 RDD 的图。由于 Spark 不复制数据，可能会丢失一些数据。如果某个数据集丢失，可以使用 RDD Lineage 重新创建丢失的数据集。因此，RDD Lineage 为 Spark 提供更好的性能解决方案，同时有助于构建弹性系统。

---
