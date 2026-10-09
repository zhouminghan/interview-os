---
id: STORAGE-0348
type: technical
question: 如何优化HBase的表结构？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey、列族、列名、预分区综合。

# 参考回答

表结构优化：RowKey 短且均匀、列族少、列名短、预分区合理、版本和 TTL 配好。表结构设计好是性能的前提。

# 追问

- 表结构优先优化什么？
