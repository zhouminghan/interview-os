---
id: STORAGE-0722
type: technical
question: Kafka 中的 broker 是什么意思？
difficulty: 0
topic: []
source_type: knowledge
---

broker 指的是 Kafka 集群中存储和管理数据的服务器。每个 broker 持有一组 topic 分区，使 Kafka 能够通过将负载分布到集群中的多个 broker 来高效处理大量数据。Broker 处理来自 Kafka 生产者和消费者的所有读写请求，并确保数据复制和容错，以防止数据丢失。

---
