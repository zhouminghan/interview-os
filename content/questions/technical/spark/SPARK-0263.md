---
id: SPARK-0263
type: technical
question: 什么是 Spark 中的 Parquet 文件？
difficulty: 0
topic: []
source_type: knowledge
---

**Apache Parquet** 是一种列式存储格式，Hadoop 生态系统中的任何项目都可以使用。任何数据处理框架、数据模型或编程语言都可以使用它。它是 Hadoop 系统项目中一种压缩、高效和编码的格式。Spark SQL 支持 Parquet 文件的读写，Parquet 文件还会自动保留原始数据的结构。在写入操作时，默认情况下，Parquet 文件中的所有列都转换为可空列。

**Parquet 文件的优势**：
- 限制 I/O 操作
- 消耗更少空间
- 只获取所需的列

---
