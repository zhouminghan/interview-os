---
id: STORAGE-0582
type: technical
question: 如何监控Clickhouse集群的健康状态？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

监控节点、副本、资源指标。

# 参考回答

健康监控看节点存活、副本同步、CPU 内存磁盘、查询延迟。用 Prometheus 采集配告警。副本积压和节点异常及时告警。

# 追问

- 健康监控看什么？
