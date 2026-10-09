---
id: FLINK-0392
type: technical
question: 如何设计基于FlinkSQL的实时数据仓库架构？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka 进，Flink 分层加工，Doris/Iceberg 出。

# 参考回答

实时数仓架构：Kafka 做数据总线，Flink SQL 做 ODS 清洗、DWS 聚合，写到 Iceberg 或 Doris。下游 BI 和看板直接查。典型是 Flink 加 Kafka 加 Doris。

# 追问

- 实时数仓分层和离线一样吗？
