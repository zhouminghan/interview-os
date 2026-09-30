---
id: STORAGE-0806
type: technical
question: 什么是 Kafka 中的 ISR（同步副本）？
difficulty: 0
topic: []
source_type: knowledge
---

ISR = In-Sync Replicas（同步副本）。对于每个分区，Kafka 维护一个与 leader 副本"同步"的 follower 副本列表。已经完全赶上 leader 日志的 follower 被认为是同步的。如果 leader 故障，Kafka 从 ISR 中选举新 leader，最小化数据丢失。
