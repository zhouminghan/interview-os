---
id: FLINK-0317
type: technical
question: 如何设置和优化FlinkSQL作业的并行度？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按数据量和资源设并行度，压测调优。

# 参考回答

并行度按数据量和 slot 资源设，一般 source 的并行度跟 Kafka 分区对齐，下游按算力调。太低处理不过来，太高状态和调度开销大。压测找最优值。

# 追问

- 并行度和 slot 什么关系？
