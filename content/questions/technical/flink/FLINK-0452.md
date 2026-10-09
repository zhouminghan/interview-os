---
id: FLINK-0452
type: technical
question: 请详细解释Kafka的监控体系，包括JMX指标、Kafka Manager、Prometheus等监控工具的使用，以及如何设置告警规则。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JMX 暴露指标，Prometheus 采集，Grafana 展示。

# 参考回答

Kafka 通过 JMX 暴露指标，用 Prometheus 采集、Grafana 出图，配告警。重点监控吞吐、延迟、分区落后、磁盘和 GC。

# 追问

- 核心监控哪些指标？
