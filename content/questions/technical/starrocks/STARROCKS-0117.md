---
id: STARROCKS-0117
type: technical
question: StarRocks 中的 OLAP 和 OLTP 能力如何？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

StarRocks 主打 OLAP，主键模型补了一点 OLTP 式更新能力。

# 参考回答

StarRocks 核心是 OLAP，主键模型支持 upsert 实时更新，但别把它当 OLTP 数据库用，它没有完整的事务和索引，高并发点查也不如 MySQL。定位是分析引擎。

# 追问

- StarRocks 为什么不能替代 MySQL？
