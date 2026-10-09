---
id: STORAGE-0424
type: technical
question: 在实际项目中如何实现HBase的监控平台？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Prometheus 采集，Grafana 展示告警。

# 参考回答

监控平台用 Prometheus 采集 HBase 指标，Grafana 出图和告警。监控 Region、读写量、延迟、GC、磁盘。告警分级通知。

# 追问

- 监控平台怎么搭？
