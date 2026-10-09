---
id: STORAGE-0434
type: technical
question: Clickhouse支持事务吗？为什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

不支持完整事务，面向分析。

# 参考回答

ClickHouse 不支持完整 ACID 事务，它是分析引擎，面向大批量写入和聚合查询，不是事务场景。更新删除能力也弱。

# 追问

- 为什么不做事务？
