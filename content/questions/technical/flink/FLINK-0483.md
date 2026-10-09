---
id: FLINK-0483
type: technical
question: 在Kafka集群中，如何优化消息的持久化性能？请详细说明持久化策略、存储格式等优化方法，以及如何评估持久化性能。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

顺序写加刷盘策略优化持久化。

# 参考回答

持久化靠顺序追加写，刷盘策略按可靠性要求调。性能评估看写入延迟和吞吐。牺牲一点可靠性换性能要谨慎。

# 追问

- 刷盘策略怎么选？
