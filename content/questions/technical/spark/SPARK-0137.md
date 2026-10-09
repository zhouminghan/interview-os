---
id: SPARK-0137
type: technical
question: Spark SQL的元数据管理是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

元数据来自 Hive Metastore 或内置 catalog。

# 参考回答

Spark SQL 元数据存在 Hive Metastore，管理表结构、分区、位置这些；也支持内置的内存 catalog。带 enableHiveSupport 就能用 Metastore 持久化元数据。

# 追问

- 内置 catalog 和 Metastore 的区别？
