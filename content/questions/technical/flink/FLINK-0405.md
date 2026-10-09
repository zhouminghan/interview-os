---
id: FLINK-0405
type: technical
question: 解释FlinkSQL与Apache Pulsar的集成方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Pulsar 连接器收发消息。

# 参考回答

Flink SQL 用 Pulsar 连接器做 Source 和 Sink，Pulsar 支持多租户和分层存储，适合比 Kafka 更复杂的消息场景。配置 topic 和 format。

# 追问

- Pulsar 和 Kafka 怎么选？
