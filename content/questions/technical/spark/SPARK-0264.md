---
id: SPARK-0264
type: technical
question: Apache Spark 和 Hadoop MapReduce 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 和 Hadoop MapReduce 之间的主要区别如下：
- **速度**：Apache Spark 比 Hadoop 快 10-100 倍，因为它使用内存处理。
- **内存**：Apache Spark 将数据存储在内存中，而 Hadoop MapReduce 将数据存储在硬盘中。
- **RDD**：Spark 使用 RDD（弹性分布式数据集）来保证容错，而 Hadoop MapReduce 使用数据的多副本复制来实现容错。
- **流处理**：Apache Spark 支持流处理且管理成本低，比 Hadoop 更容易用于实时流处理。
- **API**：Spark 提供通用 API，可与多种数据源和语言一起使用，比 Hadoop 提供的 API 更具可扩展性。

---
