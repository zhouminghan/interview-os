---
id: STORAGE-0260
type: technical
question: HBase中的KeyValue结构是什么样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

KeyValue 是键加值的结构。

# 参考回答

KeyValue 结构包含 RowKey、列族、列、时间戳、类型和值。是 HBase 存储的最小单元，按 key 排序存。理解它有助于理解存储。

# 追问

- KeyValue 里有哪些字段？
