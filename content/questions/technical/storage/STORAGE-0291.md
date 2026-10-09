---
id: STORAGE-0291
type: technical
question: 解释HBase的数据复制实现原理。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Replication 把 WAL 推送到备集群。

# 参考回答

HBase Replication 把主集群的 WAL 推送到备集群，备集群重放实现数据同步。用于灾备和跨集群数据复制。异步复制，有一定延迟。

# 追问

- 复制延迟多少？
