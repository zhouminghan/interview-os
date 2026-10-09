---
id: STORAGE-0026
type: technical
question: 什么是Hive？它和传统数据库有什么区别？请详细说明Hive的特点、优势、适用场景以及与RDBMS的主要区别。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 是构建在 Hadoop 上的数仓工具，用 SQL 处理海量数据。

# 参考回答

Hive 把 SQL 翻译成 MapReduce 或 Spark 任务，让不懂大数据的人也能用 SQL 处理海量数据。和传统数据库区别是：Hive 面向批量分析、延迟高、数据量大，数据库面向事务、低延迟。Hive 适合离线数仓。

# 追问

- Hive 为什么不做事务点查？
