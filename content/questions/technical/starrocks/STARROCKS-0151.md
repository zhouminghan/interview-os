---
id: STARROCKS-0151
type: technical
question: StarRocks 的 Operator 如何使用？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Operator 是 K8s 控制器，自动管理 StarRocks 集群。

# 参考回答

Operator 用 K8s 的 CRD 加控制器自动管理 StarRocks，能自动部署、扩缩容、升级、故障恢复。比 Helm 多了运行时的运维能力。

# 追问

- CRD 是什么？
