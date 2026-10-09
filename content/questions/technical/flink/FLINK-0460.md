---
id: FLINK-0460
type: technical
question: 请详细解释Kafka的监控指标，包括吞吐量、延迟、错误率等指标的含义和计算方法，以及如何设置合理的告警阈值。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看吞吐、延迟、落后、错误率。

# 参考回答

核心指标是生产消费吞吐、端到端延迟、消费者落后量、错误率。告警阈值按基线定，比如落后超过一定量、延迟超阈值就告警。

# 追问

- 阈值怎么定？
