---
id: FLINK-0289
type: technical
question: 解释如何使用FlinkSQL的测试工具MiniCluster进行测试。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 MiniCluster 本地跑完整作业。

# 参考回答

MiniCluster 是本地模拟的 Flink 集群，能在单机跑完整作业做集成测试。验证端到端逻辑不用起真集群。

# 追问

- MiniCluster 和真集群差在哪？
