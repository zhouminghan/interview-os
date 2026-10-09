---
id: STORAGE-0226
type: technical
question: HBase和传统关系型数据库(如MySQL)有什么区别？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

HBase 列族存储、海量可扩展，MySQL 行存、事务强。

# 参考回答

HBase 是列族存储、面向海量数据、横向扩展，没有完整事务；MySQL 行存、ACID 事务、适合结构化点查和事务。选型看数据量和场景。

# 追问

- HBase 为什么没事务？
