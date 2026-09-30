---
id: STORAGE-0811
type: technical
question: Zookeeper 的角色，能否不用 ZK 运行 Kafka？
difficulty: 0
topic: []
source_type: knowledge
---

Zookeeper 用于管理和协调 Kafka broker（leader 选举、集群成员管理、配置管理）。从历史上看，Kafka 需要 ZK 才能运行。

**KRaft 模式**（Kafka Raft 元数据模式）引入后，可以在不使用 Zookeeper 的情况下运行 Kafka。KRaft 使用内置共识机制管理集群元数据，简化架构，提高性能和可扩展性。

---

