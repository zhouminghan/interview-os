---
id: STORAGE-0155
type: technical
question: 如何优化Hive的存储格式？请详细说明各种存储格式的特点、选择标准和优化方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分析用 ORC/Parquet，序列化用 Avro。

# 参考回答

ORC、Parquet 列式适合分析，Avro 带 schema 适合序列化传输，TextFile 通用。选格式看场景，数仓分析用列式配压缩。

# 追问

- 格式转换怎么做？
