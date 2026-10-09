---
id: FLINK-0476
type: technical
question: 请详细说明Kafka的监控指标，包括吞吐量、延迟、错误率等指标的含义和计算方法，以及如何设置合理的告警阈值。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看吞吐、延迟、落后、错误率定阈值。

# 参考回答

监控指标是生产消费吞吐、端到端延迟、消费者落后量、错误率。告警阈值按历史基线定，偏离基线就告警，比如落后突然增大。

# 追问

- 阈值怎么校准？
