---
id: FLINK-0425
type: technical
question: 请详细说明Kafka中的消息顺序性保证机制，在什么情况下消息顺序会被破坏，以及如何避免这种情况？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区内有序，跨分区无序。

# 参考回答

Kafka 只保证单个分区内消息有序，跨分区无序。要全局有序就单分区，但会牺牲并行度。消息重试、多生产者也可能破坏顺序，用单分区加幂等保证。

# 追问

- 为什么跨分区无序？
