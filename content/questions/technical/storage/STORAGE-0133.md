---
id: STORAGE-0133
type: technical
question: 什么是Hive的压缩？请详细说明各种压缩算法（如Snappy、Gzip等）的特点、选择标准和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

压缩省存储费 CPU。

# 参考回答

Snappy、lz4 快，gzip 压缩率高但慢，zstd 平衡。选压缩看 CPU 和存储权衡，分析场景配 snappy 或 zstd。列式格式自带压缩。

# 追问

- 压缩影响查询吗？
