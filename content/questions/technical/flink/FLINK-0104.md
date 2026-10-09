---
id: FLINK-0104
type: technical
question: Flink在Kubernetes上的部署步骤是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Flink Operator 或原生 K8s 模式部署。

# 参考回答

K8s 部署可以用 Flink Operator，定义 FlinkDeployment 提交；或原生 K8s 模式，提交时指定 K8s 集群。Operator 管理生命周期更方便。

# 追问

- Operator 和原生模式怎么选？
