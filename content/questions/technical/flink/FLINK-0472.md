---
id: FLINK-0472
type: technical
question: 请详细说明Kafka的内存管理机制，包括堆内存、直接内存的使用，以及如何避免内存溢出？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

堆内存和页缓存各占，JVM 调好避免 OOM。

# 参考回答

Kafka 内存分 JVM 堆和页缓存，页缓存给消息读写。堆内存给对象和缓冲。调堆大小、GC，监控内存避免 OOM。

# 追问

- Kafka 内存主要花在哪？
