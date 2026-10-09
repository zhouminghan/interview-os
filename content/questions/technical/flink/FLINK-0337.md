---
id: FLINK-0337
type: technical
question: FlinkSQL作业有哪些部署模式？各自的特点是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

本地、Standalone、YARN、K8s 等模式。

# 参考回答

部署模式有本地调试、Standalone 集群、YARN、Kubernetes。生产常用 YARN 或 K8s，统一资源管理。K8s 弹性更好，YARN 传统大数据平台更常见。

# 追问

- YARN 和 K8s 怎么选？
