---
id: FLINK-0376
type: technical
question: 如何使用FlinkSQL构建实时数据仓库？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink SQL 做实时分层加工，写数据湖或查询层。

# 参考回答

实时数仓用 Flink SQL 从 Kafka 读，做 DWD 清洗、DWS 聚合，写到 Iceberg、Doris 这类存储。分层和离线类似，但都是实时流。典型链路 Flink 加 Kafka 加 Doris。

# 追问

- 实时数仓和离线数仓怎么协同？
