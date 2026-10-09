---
id: FLINK-0482
type: technical
question: 请详细解释Kafka的并发优化策略，包括线程池配置、并发度设置等，以及如何评估并发性能。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理线程池和分区并发。

# 参考回答

并发优化靠合理分区数提供并行度，生产消费端线程池配好。并发跟分区对齐，太多线程切换开销大。评估看吞吐随并发的变化。

# 追问

- 并发多少合适？
