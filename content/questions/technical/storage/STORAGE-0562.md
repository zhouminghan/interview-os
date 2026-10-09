---
id: STORAGE-0562
type: technical
question: 如何使用Clickhouse的分布式DDL优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ON CLUSTER 同步所有节点。

# 参考回答

分布式 DDL 用 ON CLUSTER 在集群所有节点执行，保持结构一致。批量建表改表用分布式 DDL，省得逐节点操作。

# 追问

- 分布式 DDL 怎么用？
