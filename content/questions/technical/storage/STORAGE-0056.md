---
id: STORAGE-0056
type: technical
question: 什么是Hive的列式存储？请详细说明列式存储的特点、优势、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列式存储按列组织数据，查询只读需要的列。

# 参考回答

列式存储把同一列的数据放一起，查询只扫涉及的列，压缩率也高。ORC、Parquet 就是列式格式。分析场景首选列式，IO 和存储都省。

# 追问

- 列式存储为什么压缩好？
