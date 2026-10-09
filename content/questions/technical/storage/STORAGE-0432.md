---
id: STORAGE-0432
type: technical
question: Clickhouse的元数据存储在哪里？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

元数据存本地文件系统。

# 参考回答

ClickHouse 元数据存在本地文件系统，表结构等定义在 metadata 目录。分布式协调靠 ZooKeeper。集群元数据各节点独立。

# 追问

- 元数据在哪？
