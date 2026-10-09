---
id: STORAGE-0351
type: technical
question: 如何优化HBase的数据压缩？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

选合适压缩算法。

# 参考回答

压缩选 Snappy、LZ4 快，ZSTD 平衡，GZIP 压缩高。按 CPU 和存储权衡。列族配压缩，省存储和 IO。

# 追问

- 压缩影响读写吗？
