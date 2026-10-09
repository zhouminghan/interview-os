---
id: FLINK-0467
type: technical
question: 6请详细解释Kafka的监控体系，包括JMX指标、Kafka Manager、Prometheus等监控工具的使用，以及如何设置告警规则。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JMX 指标经 Prometheus 采集到 Grafana。

# 参考回答

Kafka 监控用 JMX 暴露指标，Prometheus 采集、Grafana 展示、配告警。重点看吞吐、延迟、落后、磁盘和错误率。

# 追问

- 监控和运维怎么结合？
