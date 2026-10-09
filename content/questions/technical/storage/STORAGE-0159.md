---
id: STORAGE-0159
type: technical
question: 如何优化Hive的Parquet格式？请详细说明Parquet格式的特点、优势和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Parquet 是跨引擎通用的列式格式。

# 参考回答

Parquet 列式存储，跨 Spark、Flink、Impala 等通用，schema 支持好。适合多引擎共享的数据。和 ORC 类似，选型看生态。

# 追问

- Parquet 和 ORC 怎么选？
