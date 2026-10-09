---
id: STORAGE-0059
type: technical
question: 什么是Hive的压缩算法？请详细说明各种压缩算法的特点、选择标准、配置方法和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

常见 gzip、snappy、lz4、zstd。

# 参考回答

gzip 压缩率高但慢，snappy、lz4 快，zstd 平衡。选压缩看 CPU 和存储权衡，分析场景配 snappy 或 zstd。ORC、Parquet 内部自带压缩配置。

# 追问

- 压缩对查询的影响？
