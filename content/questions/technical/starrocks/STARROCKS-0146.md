---
id: STARROCKS-0146
type: technical
question: StarRocks 在 Kubernetes 上如何部署？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Operator 在 K8s 上部署管理集群。

# 参考回答

StarRocks 提供 Operator 支持在 Kubernetes 部署，把 FE、BE 跑成容器，用 CRD 管理集群生命周期，做扩缩容、升级。适合云原生环境。

# 追问

- Operator 和 Helm 的定位区别？
