---
id: STARROCKS-0148
type: technical
question: 如何使用 Helm 部署 StarRocks？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Helm Chart 一键部署 StarRocks 集群。

# 参考回答

Helm 是把 StarRocks 的部署参数打包成 Chart，一条命令拉起 FE、BE。适合标准化部署，但生产上更推荐 Operator，因为能处理运维动作。

# 追问

- Helm 部署的局限在哪？
