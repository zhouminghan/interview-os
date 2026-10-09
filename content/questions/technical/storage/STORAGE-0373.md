---
id: STORAGE-0373
type: technical
question: 详细讲解HBase的模糊查询优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用前缀过滤，避免全表扫。

# 参考回答

HBase 不支持真正的模糊查询，靠 RowKey 前缀设计加前缀过滤器，或用二级索引。全表模糊扫很慢，尽量避免。

# 追问

- 模糊查询为什么慢？
