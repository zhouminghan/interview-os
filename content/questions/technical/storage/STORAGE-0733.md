---
id: STORAGE-0733
type: technical
question: Kafka 中副本机制的目的是什么？
difficulty: 0
topic: []
source_type: knowledge
---

Kafka 中的副本机制用于增加数据的可用性和持久性。通过在多个 broker 之间复制数据，Kafka 确保即使某个 broker 故障，数据也不会丢失，并且仍然可以从其他 broker 访问。这是容错和高可用性的基本特性，对于数据可靠性至关重要的生产环境来说是必不可少的。

---
