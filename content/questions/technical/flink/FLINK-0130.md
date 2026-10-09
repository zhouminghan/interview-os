---
id: FLINK-0130
type: technical
question: Flink如何与消息队列（如RabbitMQ）集成？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 RabbitMQ Connector 收发消息。

# 参考回答

Flink 和 RabbitMQ 集成用 Connector，Source 消费队列、Sink 发布消息。RabbitMQ 的 exactly-once 支持比 Kafka 弱，一般 at-least-once。

# 追问

- RabbitMQ 和 Kafka 怎么选？
