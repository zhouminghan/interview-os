---
id: STARROCKS-0088
type: technical
question: 如何监控 StarRocks 集群状态？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Prometheus 加 Grafana 或云监控看核心指标。

# 参考回答

监控通常用 Prometheus 采集指标、Grafana 出图，看 QPS、延迟、CPU、内存、磁盘、tablet 健康状态。再配告警，指标异常就通知。

# 追问

- 核心监控指标有哪些？
