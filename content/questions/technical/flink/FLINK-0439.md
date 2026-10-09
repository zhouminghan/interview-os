---
id: FLINK-0439
type: technical
question: 什么是Kafka的配额机制？请详细说明如何配置和使用配额来限制生产者和消费者的吞吐量。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配额限制每个客户端的吞吐。

# 参考回答

Kafka 配额限制每个客户端的生产或消费吞吐，防止单个客户端打满集群。按客户端 ID 或用户配置，超了会被限流。

# 追问

- 配额有什么用？
