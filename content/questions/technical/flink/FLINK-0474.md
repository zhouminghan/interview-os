---
id: FLINK-0474
type: technical
question: 请详细解释Kafka的GC优化策略，包括GC算法选择、GC参数调优等，以及如何减少GC对性能的影响。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 G1、调堆大小、减少对象创建。

# 参考回答

Kafka 的 GC 优化用 G1 收集器、合理堆大小、减少对象分配。GC 停顿会拖慢生产和消费，要监控 GC 指标，避免频繁 full GC。

# 追问

- full GC 频繁怎么办？
