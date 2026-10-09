---
id: STARROCKS-0136
type: technical
question: StarRocks 的事务模型是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

以导入事务为主，靠版本实现一致性可见。

# 参考回答

StarRocks 事务模型偏简单，主要是导入事务，提交后生成新版本，查询读到一致快照。它不做跨多表的复杂 ACID 事务，定位是分析而不是交易。

# 追问

- 导入事务和数据库事务的区别？
