---
id: SPARK-0252
type: technical
question: Apache Spark 的主要库有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 的主要库如下：
- **MLib**：Spark 的机器学习库，用于创建可扩展的机器学习系统，包含各种机器学习算法以及流水线（pipeline）等功能。
- **GraphX**：用于图计算的库，帮助创建数据的图抽象，然后使用各种图算子（如 SubGraph、joinVertices 等）。
- **Structured Streaming**：用于处理 Spark 中的流的库，是构建在 Spark SQL 引擎之上的容错系统。
- **Spark SQL**：用于在 Spark 平台上处理 SQL 查询的组件。
- **SparkR**：Spark 中从 R 语言使用 Spark 的包，可以使用 R 数据框、dplyr 等，也可以从 RStudio 启动 SparkR。

---
