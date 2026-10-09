---
id: STORAGE-0239
type: technical
question: HBase中的列族(Column Family)最佳实践是什么？为什么不建议设置太多列族？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列族越少越好，一般一到两个。

# 参考回答

列族不建议太多，因为每个列族独立的 MemStore 和 StoreFile，flush 和 compact 都按列族做，列族多了内存和 IO 开销大。一般一到两个列族。

# 追问

- 列族多有什么问题？
