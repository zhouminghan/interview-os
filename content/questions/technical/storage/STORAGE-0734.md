---
id: STORAGE-0734
type: technical
question: 生产消息到 topic 后能否获取消息的 offset？
difficulty: 0
topic: []
source_type: knowledge
---

是的，在 Kafka 中生产消息后可以获取消息的 offset。当你发送消息到 Kafka topic 时，Producer API 可以返回关于消息的元数据，包括消息在 topic 分区中的 offset。

---
