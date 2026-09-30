---
id: STORAGE-0803
type: technical
question: Kafka 中的消费者如何消费消息？
difficulty: 0
topic: []
source_type: knowledge
---

Kafka 消费者通过**拉取模型**（pull-based model）消费消息。消费者订阅 topic，定期轮询（poll）broker 获取新消息。每条消息按其在分区中的存储顺序被消费。消费者跟踪其在每个分区中的 offset。
