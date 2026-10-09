---
id: STORAGE-0301
type: technical
question: 详细描述HBase的扫描器工作原理。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

扫描器合并多来源数据按序返回。

# 参考回答

Scanner 扫描时把 MemStore 和多个 HFile 的数据合并，按 RowKey 排序去重，过滤后返回。配合 Bloom Filter 和过滤器减少扫描量。

# 追问

- 扫描为什么慢？
