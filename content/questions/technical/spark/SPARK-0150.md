---
id: SPARK-0150
type: technical
question: 如何实现Spark Streaming的容错机制？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠 WAL 和 checkpoint，Direct 方式用 Kafka offset。

# 参考回答

容错靠 write ahead log 记录收到的数据，checkpoint 保存状态和 offset。Kafka Direct 方式把 offset 存在 Kafka 或 checkpoint，恢复时从 offset 重放。

# 追问

- WAL 是什么？
