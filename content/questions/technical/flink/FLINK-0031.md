---
id: FLINK-0031
type: technical
question: 什么是Flink的资源管理器（ResourceManager）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

管理 TaskManager 和 slot 资源。

# 参考回答

ResourceManager 负责向集群申请和释放资源，管理 TaskManager 的 slot。不同部署模式对接不同的资源管理器，比如 YARN 或 K8s。

# 追问

- YARN 和 K8s 的资源管理有区别吗？
