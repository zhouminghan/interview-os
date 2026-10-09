---
id: STORAGE-0614
type: technical
question: Clickhouse的监控告警配置方法是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Prometheus 加 Grafana 告警。

# 参考回答

监控告警用 Prometheus 采集指标，Grafana 配告警规则。阈值按基线设，通知走邮件 IM。核心指标告警。

# 追问

- 告警怎么配？
