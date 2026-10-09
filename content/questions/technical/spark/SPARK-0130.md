---
id: SPARK-0130
type: technical
question: 如何配置Spark SQL的内存管理？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调执行内存、存储内存、off-heap 参数。

# 参考回答

SQL 内存管理用 spark.memory.fraction 控制执行存储比例，还有 off-heap 内存。大查询要保证执行内存够，否则 spill 到磁盘变慢。

# 追问

- spill 是什么？
