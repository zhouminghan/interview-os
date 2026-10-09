---
id: FLINK-0427
type: technical
question: 什么是Kafka的幂等性生产者？它是如何保证消息不会重复发送的？在什么场景下需要使用幂等性生产者？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

幂等生产者靠 PID 和序号去重。

# 参考回答

幂等生产者给每条消息分配 PID 和序号，broker 端去重，防止重试导致重复。开启 enable.idempotence。适合需要不重复的场景。

# 追问

- 幂等能跨分区吗？
