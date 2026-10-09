---
id: STARROCKS-0147
type: technical
question: StarRocks 的容器化方案有哪些？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

官方镜像加 Operator 或 Helm 部署。

# 参考回答

容器化就是官方镜像加 Operator 或 Helm 部署到 K8s。好处是部署快、易扩容、环境一致。要注意存储用持久卷，状态服务别丢数据。

# 追问

- 状态服务为什么一定要持久卷？
