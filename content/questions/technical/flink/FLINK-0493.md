---
id: FLINK-0493
type: technical
question: 在Kafka集群中，如何实现集群的性能优化？请详细说明性能指标、优化方法、效果评估等，以及如何持续改进性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

定指标、找瓶颈、优化、评估循环。

# 参考回答

性能优化先定吞吐延迟指标，压测找瓶颈，针对优化硬件、参数、分区，再压测评估效果。持续监控，反复迭代改进。

# 追问

- 怎么找性能瓶颈？
