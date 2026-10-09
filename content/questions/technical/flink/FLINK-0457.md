---
id: FLINK-0457
type: technical
question: 在Kafka集群中，如何实现消息的优先级处理？请详细说明优先级队列的设计和实现方式。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka 本身无优先级，用多 topic 模拟。

# 参考回答

Kafka 没有原生优先级，通常用多个 topic 区分优先级，消费端按优先级优先消费高优先级 topic。本质是应用层实现优先级。

# 追问

- 为什么 Kafka 不做优先级？
