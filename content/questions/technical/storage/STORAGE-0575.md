---
id: STORAGE-0575
type: technical
question: Clickhouse的分布式架构如何设计？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分片加副本，Distributed 表分发。

# 参考回答

分布式架构分片加副本，本地表加 Distributed 表做分发，ZooKeeper 协调副本。分片横向扩展，副本高可用。

# 追问

- 分布式怎么设计？
