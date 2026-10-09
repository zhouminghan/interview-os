---
id: STORAGE-0437
type: technical
question: 什么是Clickhouse的分布式DDL？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

一条 DDL 在所有节点执行。

# 参考回答

分布式 DDL 用 ON CLUSTER 指定集群，DDL 在集群所有节点执行，保持表结构一致。建表删表都用分布式 DDL。

# 追问

- 分布式 DDL 怎么写？
