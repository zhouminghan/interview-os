---
id: STARROCKS-0018
type: technical
question: StarRocks 与传统数据库的区别是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

传统数据库面向事务点查，StarRocks 面向海量分析聚合。

# 参考回答

传统库像 MySQL 是行存、面向高频点查和事务；StarRocks 是列存、MPP、面向 TB 到 PB 级的分析聚合。一个重 ACID 和并发写，一个重扫描和聚合吞吐。

# 追问

- 行存和列存各自的适用场景？
