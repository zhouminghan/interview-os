---
id: STARROCKS-0026
type: technical
question: StarRocks 支持哪些数据导入方式？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Broker Load、Stream Load、Routine Load、Insert、Spark 和 Flink 导入。

# 参考回答

导入方式挺多：Broker Load 从对象存储或 HDFS 批量导入，Stream Load 走 HTTP 实时导入，Routine Load 从 Kafka 持续消费，还有 Insert Into 和 Spark、Flink Connector。离线批量用 Broker Load，实时用 Routine Load 或 Flink。

# 追问

- Broker Load 和 Routine Load 的区别？
