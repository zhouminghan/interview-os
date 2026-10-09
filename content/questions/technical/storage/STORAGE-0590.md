---
id: STORAGE-0590
type: technical
question: 解释Clickhouse的分布式事务支持。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

不支持分布式事务。

# 参考回答

ClickHouse 不支持跨节点分布式事务，它是分析引擎。写入是单节点原子，跨节点要应用层协调。不适合事务场景。

# 追问

- 为什么没事务？
