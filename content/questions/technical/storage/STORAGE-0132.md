---
id: STORAGE-0132
type: technical
question: 如何优化Hive的存储格式？请详细说明各种存储格式（如ORC、Parquet等）的特点、选择标准和优化方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分析场景用 ORC 或 Parquet 列式。

# 参考回答

ORC 和 Parquet 都是列式，压缩好、查询只读需要的列。ORC 在 Hive 生态更原生，Parquet 跨引擎通用。分析场景用列式，配压缩。

# 追问

- ORC 和 Parquet 怎么选？
