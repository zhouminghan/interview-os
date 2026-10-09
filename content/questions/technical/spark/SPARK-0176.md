---
id: SPARK-0176
type: technical
question: Structured Streaming的并行度如何设置？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区数决定并行，可 repartition 调整。

# 参考回答

并行度由数据分区决定，可以 repartition 调整，Kafka 分区数也影响并行。分区数要跟 core 匹配。

# 追问

- Kafka 分区数和并行度的关系？
