---
id: FLINK-0479
type: technical
question: 在Kafka集群中，如何优化消息的过滤性能？请详细说明过滤策略、索引设计等优化方法，以及如何评估过滤性能。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤尽量靠分区和 key 减少扫描。

# 参考回答

Kafka 过滤靠分区和 key 粗粒度定位，减少扫的数据。精确过滤在消费端做。评估看消费端处理延迟和扫的数据量。

# 追问

- 为什么 Kafka 不精确过滤？
