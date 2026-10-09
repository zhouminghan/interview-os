---
id: SPARK-0152
type: technical
question: 如何优化Spark Streaming的性能？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理批间隔、并行度、减少序列化。

# 参考回答

性能优化主要调批处理间隔、分区并行度，用 Direct Kafka 减少 Receiver 开销，合理内存和序列化。批间隔太小会积压，太大延迟高。

# 追问

- 积压了怎么办？
