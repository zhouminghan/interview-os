---
id: STORAGE-0584
type: technical
question: 如何实现Clickhouse与Kafka的数据集成？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka 表引擎实时消费写入。

# 参考回答

ClickHouse 的 Kafka 表引擎订阅 topic，实时消费写入。或中间用 Flink 消费再写。适合实时数据接入。

# 追问

- Kafka 集成怎么做？
