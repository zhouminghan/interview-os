---
id: STORAGE-0327
type: technical
question: 如何优化HBase的列族设计？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列族少、列短、类型小。

# 参考回答

列族设计越少越好，一般一到两个。列名短省空间，类型选小。相关访问频率一致的列放同族。别一个列族塞几十个列族。

# 追问

- 列族多少合适？
