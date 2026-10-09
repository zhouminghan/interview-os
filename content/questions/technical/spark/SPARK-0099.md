---
id: SPARK-0099
type: technical
question: 如何创建DataFrame？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

读数据源、从 RDD 转换、或用 range 构造。

# 参考回答

创建 DataFrame 主要靠 spark.read 读 CSV、Parquet、JSON、JDBC 这些，也可以从 RDD 加 schema 转换，或 spark.range 构造。读文件是最常用的。

# 追问

- 读 Parquet 和 CSV 有什么区别？
