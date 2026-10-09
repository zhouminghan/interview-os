---
id: STORAGE-0261
type: technical
question: 解释HBase中的列族压缩机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列族可配压缩，省存储。

# 参考回答

列族可以配压缩算法，比如 Snappy、LZ4、GZIP，数据落盘时压缩。省存储和 IO，但增加 CPU 开销。按数据特点选压缩算法。

# 追问

- 压缩怎么选？
