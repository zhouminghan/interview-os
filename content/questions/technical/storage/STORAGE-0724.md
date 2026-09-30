---
id: STORAGE-0724
type: technical
question: Zookeeper 在 Kafka 生态中的角色是什么，能否在不使用 Zookeeper 的情况下运行 Kafka？
difficulty: 0
topic: []
source_type: knowledge
---

Kafka 中的 Zookeeper 用于管理和协调 Kafka broker。它有助于分区 leader 选举、集群成员管理以及配置管理等任务。从历史上看，Kafka 需要 Zookeeper 才能运行。

然而，随着 **KRaft 模式**（Kafka Raft 元数据模式）的引入，可以在不使用 Zookeeper 的情况下运行 Kafka。KRaft 模式通过使用内置的共识机制来管理集群元数据，取代了 Zookeeper，简化了架构，并有可能提高性能和可扩展性。

---
