---
id: WAREHOUSE-0117
type: technical
question: Hive在数据仓库中的作用是什么？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 把 SQL 翻译成 MapReduce 或 Spark 任务，让数仓能用 SQL 处理海量数据。

# 参考回答

Hive 本质是数仓的存储和元数据层，建在 HDFS 之上，把文件映射成表，让不懂 MapReduce 的人也能用 SQL 做大数据加工。它负责管理表结构、分区、元数据，实际计算现在多交给 Spark 或 Tez 去执行，是离线数仓最核心的底座之一。

# 追问

- Hive 和传统数据库在存储和执行上有什么不同？
- Hive 为什么要做分区？
