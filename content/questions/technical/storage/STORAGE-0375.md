---
id: STORAGE-0375
type: technical
question: 在实际项目中，如何设计HBase的表结构？请分享具体案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey 贴合查询，列族少，预分区。

# 参考回答

设计表先想查询模式，RowKey 按查询键设计，列族一到两个，预分区避免热点。比如用户行为表 RowKey 用用户 ID 加时间戳。

# 追问

- 设计第一步做什么？
