---
id: STORAGE-0269
type: technical
question: 解释HBase中的数据压缩算法选择策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按 CPU 和存储权衡选。

# 参考回答

Snappy、LZ4 快但压缩率一般，GZIP 压缩率高但慢，ZSTD 平衡。CPU 紧张用快压缩，存储紧张用高压缩。HBase 常用 Snappy 或 ZSTD。

# 追问

- 压缩对查询影响？
