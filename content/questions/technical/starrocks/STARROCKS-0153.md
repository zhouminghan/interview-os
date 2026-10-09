---
id: STARROCKS-0153
type: technical
question: 如何监控容器化 StarRocks 集群？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Prometheus 加 Grafana 监控 Pod 和集群指标。

# 参考回答

容器化集群监控用 Prometheus 采集指标、Grafana 出图，既看 K8s 的 Pod 资源，也看 StarRocks 的 QPS、延迟、tablet 健康。配告警规则自动通知。

# 追问

- 容器化监控和物理机监控差在哪？
