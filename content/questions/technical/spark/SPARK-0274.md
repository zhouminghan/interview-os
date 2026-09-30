---
id: SPARK-0274
type: technical
question: 如何从缓存中移除数据？
difficulty: 0
topic: []
source_type: knowledge
---

通常，Apache Spark 会自动从缓存中移除未使用的对象，使用**最近最少使用（LRU）**算法丢弃旧分区。Spark 中有自动监控机制来监控每个节点上的缓存使用情况。如果想强制从 Apache Spark 的缓存中移除对象，可以使用 `RDD.unpersist()` 方法。

---
