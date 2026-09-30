---
id: STORAGE-0737
type: technical
question: offset 在 Kafka 中的作用是什么？
difficulty: 0
topic: []
source_type: knowledge
---

在 Kafka 中，offset 是 Kafka topic 分区中每条记录的唯一标识符。它表示记录在分区中的位置。消费者使用 offset 来跟踪哪些记录已被读取，哪些还没有，从而实现容错和可扩展的消息消费。本质上，它使消费者能够从其停止的精确位置继续读取，即使在故障或重启的情况下，从而确保没有消息丢失或被重复读取。

---
