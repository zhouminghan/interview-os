---
id: FLINK-0433
type: technical
question: 什么是Kafka的Exactly Once语义？请详细说明Kafka是如何实现Exactly Once的，以及使用时的注意事项。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

事务加幂等实现 exactly-once。

# 参考回答

Kafka exactly-once 靠幂等生产者加事务，跨分区原子写入。Flink 配合 Kafka 用两阶段提交实现端到端 exactly-once。注意性能开销和事务超时。

# 追问

- 事务影响性能吗？
