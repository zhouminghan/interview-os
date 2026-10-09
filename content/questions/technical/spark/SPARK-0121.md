---
id: SPARK-0121
type: technical
question: Spark SQL的SQL语法支持哪些特性？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

兼容标准 SQL 和大部分 Hive 语法。

# 参考回答

Spark SQL 支持标准 SQL 的 select、join、窗口函数、子查询，也兼容大部分 Hive 语法和 UDF。基本拿 Hive 的 SQL 直接跑没问题。

# 追问

- 有哪些 Hive 语法不兼容？
