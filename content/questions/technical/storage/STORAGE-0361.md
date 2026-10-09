---
id: STORAGE-0361
type: technical
question: 详细讲解HBase的监控优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

关键指标监控加告警。

# 参考回答

监控优化关注 Region 数、读写量、内存、GC、磁盘、请求延迟。用 Prometheus 采集配 Grafana 告警。监控全了问题早发现。

# 追问

- 核心监控什么？
