---
id: STORAGE-0541
type: technical
question: 如何监控Clickhouse的性能指标？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

系统表加 Prometheus 监控。

# 参考回答

监控用 system.metrics、system.events 查指标，或 Prometheus 采集。看查询量、延迟、内存、CPU、IO。配 Grafana 告警。

# 追问

- 监控哪些指标？
