---
id: STORAGE-0433
type: technical
question: 什么是ZooKeeper在Clickhouse集群中的作用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ZK 协调副本和分布式 DDL。

# 参考回答

ZooKeeper 在 ClickHouse 里协调副本同步、分布式 DDL、分片元数据。副本一致性靠 ZK 协调。单机不需要 ZK。

# 追问

- ZK 挂了影响？
