---
id: SPARK-0188
type: technical
question: Structured Streaming的背压阈值如何设置？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

一般自动背压，特殊场景调消费参数。

# 参考回答

Structured Streaming 背压基本自动，特殊情况调 Kafka 的 maxOffsetsPerTrigger 这类参数控制单批量。一般不用手动设阈值。

# 追问

- maxOffsetsPerTrigger 是什么？
