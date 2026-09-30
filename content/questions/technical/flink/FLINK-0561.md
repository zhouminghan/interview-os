---
id: FLINK-0561
type: technical
question: Spark Streaming 和 Flink 的 Checkpoint 区别？
difficulty: 0
topic: []
source_type: knowledge
---

Spark Streaming 的 Checkpoint 会导致数据重复消费。然而 Flink 的 Checkpoint 可以确保精确一次，同时可以是增量的、快速的 Checkpoint。Flink 有三种状态：Memory、RocksDB、HDFS。

---
