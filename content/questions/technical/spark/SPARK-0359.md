---
id: SPARK-0359
type: technical
question: 在 Spark 中创建 RDD 的两种方式？
difficulty: 0
topic: []
source_type: knowledge
---

1. **内部方式**：在 Spark Driver 程序中并行化现有数据集合，从中创建 RDD。
2. **外部方式**：通过引用外部数据源（如 AWS S3、HDFS、HBase 等）中的数据集来创建 RDD。
