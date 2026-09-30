---
id: STORAGE-0732
type: technical
question: 如果首选副本不在 ISR 列表中会怎样？
difficulty: 0
topic: []
source_type: knowledge
---

如果首选副本不在 Kafka topic 的 ISR（同步副本）中，生产者将等待首选副本变为可用（如果配置了某些 ack 设置），或者将消息发送到 ISR 中的另一个可用 broker。这通过使用完全与 leader 保持最新的副本来确保数据完整性。如果消费者设置为仅从首选副本消费，而该副本不可用，则消费者可能会经历数据可用性的延迟。

---
