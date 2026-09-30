---
id: STORAGE-0728
type: technical
question: 什么是 Kafka 中的 ISR（同步副本）？
difficulty: 0
topic: []
source_type: knowledge
---

在 Apache Kafka 中，ISR 代表 **In-Sync Replicas**（同步副本）。这是一个与 Kafka 高可用性和容错机制相关的概念。

对于每个分区，Kafka 维护一个被认为是与 leader 副本"同步"的副本列表。leader 副本是负责处理特定分区的所有读写请求的副本，而 follower 副本则复制 leader 的日志。已经完全赶上 leader 日志的 follower 被认为是同步的。这意味着它们已经复制了 leader 确认的最后一条消息之前的所有消息。

ISR 确保数据的持久性和可用性。如果 leader 故障，Kafka 可以从同步副本中选举一个新的 leader，最大限度地减少数据丢失和停机时间。

---
