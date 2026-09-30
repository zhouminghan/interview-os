---
id: STORAGE-0799
type: technical
question: Kafka 能接收的消息最大大小是多少？
difficulty: 0
topic: []
source_type: knowledge
---

默认 1 MB（1,048,576 字节）。可通过 `message.max.bytes`（broker 端）和 `max.message.bytes`（topic 端）调整。

---

