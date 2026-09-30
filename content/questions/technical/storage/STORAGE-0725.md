---
id: STORAGE-0725
type: technical
question: Kafka 中的消费者如何消费消息？
difficulty: 0
topic: []
source_type: knowledge
---

在 Apache Kafka 中，消费者通过**拉取模型**（pull-based model）消费消息。消费者订阅一个或多个 topic，并定期轮询（poll）Kafka broker 以获取新消息。消息按照它们在 topic 分区中存储的顺序被消费。每个消费者跟踪其在每个分区中的 offset（偏移量），即下一条要消费的消息的位置，使其能够在重启或故障后从中断处继续消费。

---
