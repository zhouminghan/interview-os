---
id: STORAGE-0585
type: technical
question: Clickhouse的实时数据同步方案有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka 引擎、Flink、CDC 同步。

# 参考回答

实时同步用 Kafka 表引擎、Flink 写入、或 CDC 同步数据库变更。按实时性和数据源选。Flink 加 ClickHouse 是常见组合。

# 追问

- 实时同步怎么做？
