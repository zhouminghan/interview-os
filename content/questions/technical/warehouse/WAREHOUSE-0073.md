---
id: WAREHOUSE-0073
type: technical
question: Spark 写 Hive 分区表的坑（动态分区小文件）
topic: [warehouse, spark]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

动态分区写入时每个 Task 可能写多个分区，导致小文件爆炸。

# 30 秒回答

二级分区（日期+小时）动态写入，分区数 × Task 数 = 大量小文件；用 DISTRIBUTE BY 分区字段集中写，控制文件数。

# 追问

- DISTRIBUTE BY 和 REPARTITION 区别？
- Spark 写 Hive 分区表底层逻辑？
