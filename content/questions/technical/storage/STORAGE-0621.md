---
id: STORAGE-0621
type: technical
question: 如何使用Clickhouse处理流数据？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka 引擎实时消费。

# 参考回答

流数据用 Kafka 表引擎实时消费写入，或 Flink 处理再写。ClickHouse 做实时查询层。典型 Flink 加 ClickHouse。

# 追问

- 流数据怎么处理？
