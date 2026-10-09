---
id: FLINK-0394
type: technical
question: 解释基于FlinkSQL的Kappa架构实现方案。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

只保留实时链路，用 Kafka 重放做回溯。

# 参考回答

Kappa 架构只保留 Flink 实时链路，用 Kafka 保留历史数据，回溯时重新消费重算。架构简单一套代码，但大规模回溯成本高。

# 追问

- Kappa 的回溯怎么做？
