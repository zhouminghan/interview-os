---
id: FLINK-0338
type: technical
question: 如何在Kubernetes上部署和扩展FlinkSQL作业？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Flink Operator 部署，按负载扩缩容。

# 参考回答

K8s 上用 Flink Operator 部署，定义 FlinkDeployment，自动管理生命周期。扩缩容靠改并行度或加 TaskManager，可配自动扩缩按指标调整。

# 追问

- Operator 能做什么？
