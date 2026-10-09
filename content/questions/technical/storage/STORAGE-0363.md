---
id: STORAGE-0363
type: technical
question: 如何优化HBase的数据压缩比？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

选高压缩算法，但权衡 CPU。

# 参考回答

压缩比优化选 GZIP、ZSTD 这类高压缩算法，但 CPU 开销大。按数据重复度选，重复高压缩好。存储紧张才追求高压缩。

# 追问

- 压缩比和 CPU 怎么平衡？
