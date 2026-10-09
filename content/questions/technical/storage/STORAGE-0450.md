---
id: STORAGE-0450
type: technical
question: Clickhouse的集群部署模式有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分片加副本部署。

# 参考回答

集群部署分片加副本，分片横向扩展，副本高可用。配 Distributed 表和 ZooKeeper。单机强，集群用于海量数据。

# 追问

- 分片副本怎么配？
