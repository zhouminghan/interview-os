---
id: SPARK-0174
type: technical
question: Structured Streaming的背压机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

自动调整消费速率，避免积压。

# 参考回答

Structured Streaming 内部有背压，消费跟不上就自动降速，靠 Kafka 动态限流。基本不用手动配。

# 追问

- 背压和反压是一回事吗？
