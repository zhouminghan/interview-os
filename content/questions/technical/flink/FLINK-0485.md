---
id: FLINK-0485
type: technical
question: 在Kafka集群中，如何实现集群的监控和告警？请详细说明监控指标、告警规则、告警通知等配置，以及如何保证监控的可靠性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

指标采集加分级告警，多渠道通知。

# 参考回答

监控告警用 Prometheus 采集指标，按阈值分级告警，通知走邮件、电话、企业 IM。监控系统本身也要高可用，避免监控挂了没人知道。

# 追问

- 监控系统可靠性怎么保证？
