---
id: FLINK-0463
type: technical
question: 在Kafka集群中，如何实现消息的过滤和转换？请详细说明过滤和转换的设计和实现方式。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤转换放消费端或流处理层。

# 参考回答

Kafka 本身不做过滤转换，一般在消费端或 Flink 这类流处理层做。需要转换的话用流处理框架，Kafka 只负责传输存储。

# 追问

- 为什么 Kafka 不做转换？
