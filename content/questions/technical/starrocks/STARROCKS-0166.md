---
id: STARROCKS-0166
type: technical
question: StarRocks 如何与 Hadoop 生态集成？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

读 HDFS 数据、Hive 外表、配合 Spark 做加工。

# 参考回答

StarRocks 能通过 Hive 外表直接查 HDFS 上的表，也能用 Broker Load 从 HDFS 导入，还能和 Spark 配合，Spark 加工完导入 StarRocks 查询。

# 追问

- Hive 外表和导入的取舍？
