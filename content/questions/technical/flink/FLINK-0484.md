---
id: FLINK-0484
type: technical
question: 请详细说明Kafka的监控体系，包括JMX指标、Kafka Manager、Prometheus等监控工具的使用，以及如何设置告警规则。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JMX 指标经 Prometheus 到 Grafana。

# 参考回答

Kafka 监控用 JMX 暴露指标，Prometheus 采集，Grafana 展示和告警。重点监控吞吐、延迟、落后、磁盘和错误率。

# 追问

- 告警规则怎么设？
