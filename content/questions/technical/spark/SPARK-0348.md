---
id: SPARK-0348
type: technical
question: Apache Spark 的主要特性有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 是一个面向大规模数据处理的统一分析引擎，支持多种语言（Java、Scala、Python、R），并提供以下核心特性：

1. **高性能**：在内存中运行速度比 Hadoop MapReduce 快 100 倍，在磁盘上快 10 倍。
2. **易用性**：提供超过 80 个高级算子，可以轻松构建并行应用。
3. **通用性**：提供完整的分析栈——Spark SQL（SQL 和结构化数据）、Spark Streaming（流处理）、MLlib（机器学习）、GraphX（图计算）等。
4. **多数据源集成**：可以从 Hadoop、HBase、Cassandra、Hive 等多种数据源读取数据。
5. **使用 RDD 进行内存计算**。
6. **惰性求值**：直到调用行动（Action）操作时才触发实际计算。
7. **容错性**：通过 RDD 血缘（Lineage）自动恢复丢失的分区。
8. **支持多种文件格式**：文本、CSV、JSON、Parquet、ORC 等。
