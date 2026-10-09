---
id: SPARK-0120
type: technical
question: 如何读取不同格式的数据？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 spark.read.format 或快捷方法读。

# 参考回答

读不同格式用 spark.read，比如 spark.read.parquet、csv、json、jdbc，或用 format 指定。读取时可以顺带指定 schema 和选项。

# 追问

- 读 CSV 为什么建议手动指定 schema？
