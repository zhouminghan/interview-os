---
id: STORAGE-0034
type: technical
question: 如何理解Hive的存储格式？常见的存储格式有哪些？请详细说明各种存储格式的特点、选择标准和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

常见 TextFile、ORC、Parquet。

# 参考回答

TextFile 是纯文本，ORC 和 Parquet 是列式格式。分析场景用 ORC 或 Parquet，列式压缩好、查询只读需要的列。ORC 在 Hive 生态更原生，Parquet 跨引擎更通用。

# 追问

- ORC 和 Parquet 怎么选？
