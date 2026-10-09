---
id: SPARK-0225
type: technical
question: 如何优化Spark的部署模式？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

选 YARN 或 K8s 统一资源，按负载配。

# 参考回答

部署模式优化是生产用 YARN 或 K8s 统一资源管理，按负载选集群规模，避免 standalone 资源隔离差。

# 追问

- YARN 和 K8s 怎么选？
