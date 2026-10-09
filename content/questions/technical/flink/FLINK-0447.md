---
id: FLINK-0447
type: technical
question: 在Kafka集群中，如何设计合理的分区策略？请详细说明分区数量、副本因子等参数的选择依据，以及不同场景下的最佳实践。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区数看并行度，副本因子看容错。

# 参考回答

分区数按下游并行度和吞吐定，太少并行度不够，太多开销大；副本因子一般 2 或 3，平衡可靠性和存储成本。按业务增长留余量。

# 追问

- 分区太多有什么坏处？
