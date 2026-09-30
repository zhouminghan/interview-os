---
id: STORAGE-0723
type: technical
question: Kafka 能接收的消息最大大小是多少？
difficulty: 0
topic: []
source_type: knowledge
---

Kafka 能接收的消息最大大小由 broker 端的 `message.max.bytes` 配置参数和 topic 端的 `max.message.bytes` 参数决定。默认情况下，Kafka 允许的消息大小上限为 1 MB（1,048,576 字节），但这两个参数都可以调整以允许更大的消息。

---
