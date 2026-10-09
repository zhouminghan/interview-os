---
id: STORAGE-0232
type: technical
question: 什么是HBase的预分区？为什么要进行预分区？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

建表时预先分好 Region，避免热点。

# 参考回答

预分区建表时按 RowKey 范围预先分多个 Region，避免数据都写进一个 Region 造成热点。RowKey 设计配合预分区，分布更均匀。

# 追问

- 不预分区会怎样？
