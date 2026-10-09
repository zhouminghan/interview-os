---
id: STORAGE-0250
type: technical
question: HBase的RowKey设计原则有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

长度短、均匀分布、按查询设计。

# 参考回答

RowKey 设计要短、分布均匀避免热点、贴合查询模式。常用散列加业务 ID，或反转时间戳避免递增热点。RowKey 设计是 HBase 性能的核心。

# 追问

- 时间戳做 RowKey 有什么问题？
