---
id: STORAGE-0154
type: technical
question: 什么是Hive的列式存储？请详细说明列式存储的特点、优势和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按列存储，查询只读需要的列。

# 参考回答

列式存储同列数据放一起，查询只扫涉及的列，压缩也好。ORC、Parquet 是列式。分析场景首选，省 IO 和存储。

# 追问

- 列式为什么适合分析？
