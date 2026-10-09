---
id: FLINK-0440
type: technical
question: 请详细解释Kafka中的消息格式转换过程，以及如何实现不同版本之间的消息格式转换。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

broker 负责老格式到新格式的转换。

# 参考回答

消息格式升级时，broker 会把老格式消息转换成新格式再处理。升级按顺序做，避免跨版本兼容问题。

# 追问

- 为什么要格式转换？
