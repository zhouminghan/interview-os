---
id: SPARK-0132
type: technical
question: 如何对Spark SQL进行性能调优？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列式存储、分区、broadcast、AQE、参数调优。

# 参考回答

SQL 性能调优套路：数据存 Parquet 列式、合理分区、小表 broadcast、开启 AQE、调整并行度和内存。先 explain 定位再动手。

# 追问

- AQE 能自动做什么？
