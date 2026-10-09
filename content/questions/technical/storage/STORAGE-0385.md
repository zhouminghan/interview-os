---
id: STORAGE-0385
type: technical
question: 在生产环境中如何监控HBase集群？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Prometheus 采集指标，Grafana 展示告警。

# 参考回答

监控用 Prometheus 采集 HBase 指标，Grafana 出图配告警。看 Region 数、读写量、延迟、内存、GC、磁盘。告警及时通知。

# 追问

- 监控哪些指标？
