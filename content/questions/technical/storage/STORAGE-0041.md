---
id: STORAGE-0041
type: technical
question: Hive中的压缩格式有哪些？如何选择？请详细说明各种压缩格式的特点、选择标准和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

常见 gzip、snappy、lz4、zstd。

# 参考回答

gzip 压缩率高但慢，snappy、lz4 快，zstd 平衡。选压缩看 CPU 和存储权衡。分析场景常配 snappy 或 zstd，兼顾压缩和速度。ORC、Parquet 自带压缩。

# 追问

- 压缩对查询性能影响？
