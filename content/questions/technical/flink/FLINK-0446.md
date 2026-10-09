---
id: FLINK-0446
type: technical
question: 请详细说明Kafka集群的架构设计，包括Broker、ZooKeeper、Producer和Consumer的角色和职责，以及它们之间是如何协同工作的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Broker 存数据，ZK 管元数据，Producer 写，Consumer 读。

# 参考回答

Kafka 集群由多个 Broker 组成，存消息分区副本；ZooKeeper 管元数据和选主；Producer 写消息，Consumer 订阅消费。新版本逐步去掉 ZK，用 KRaft。

# 追问

- KRaft 是什么？
