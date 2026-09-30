---
id: SPARK-0302
type: technical
question: 什么是 DataSet？其相比 DataFrame 和 RDD 的优势？
difficulty: 0
topic: []
source_type: knowledge
---

**Spark DataSet** 是 SparkSQL 的数据结构，提供 JVM 对象以及 RDD 的所有优势（如使用 lambda 函数操作数据）和 Spark SQL 优化的执行引擎。自 Spark 1.6 版本引入。

DataSet 是强类型结构，代表结构化查询及其编码器。它们为数据提供类型安全，还提供面向对象的编程接口。

**DataSet 的优势**：
- 优化的查询功能：Spark DataSet 使用 Tungsten 和 Catalyst 查询优化器框架提供优化的查询。
- 编译时分析：DataSet 具有在编译时分析和检查语法的灵活性，这在 RDD、DataFrame 或常规 SQL 查询中技术上不可能。
- 可互转：DataSet 的类型安全功能可以通过 DataSetHolder 提供的方法转换为"非类型"DataFrame：`toDS()`、`toDF()`、`toDF(columnName: String*)`。
- 更快的计算：DataSet 的实现比 RDD 快得多，有助于提高系统性能。
- 持久化存储合格：由于 DataSet 既可查询又可序列化，它们可以轻松存储在任何持久化存储中。
- 更少内存消耗：Spark 使用缓存功能创建更优的数据布局，因此消耗更少内存。
- 单一接口多语言：为 Java 和 Scala 语言提供单一 API。

---
