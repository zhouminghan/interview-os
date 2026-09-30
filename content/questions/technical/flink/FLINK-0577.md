---
id: FLINK-0577
type: technical
question: Flink 和 Kafka 的基础概念？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415 Q17

Kafka：分布式消息队列，Topic（分类）、Partition（并行度保障）、Consumer Group（负载均衡）。

Flink：实时流处理引擎，真正逐条处理、Exactly-Once、Checkpoint 容错。

典型架构：Kafka 数据传输层 + Flink 实时计算层。QQ 频道：Flink 消费 Kafka 写 Iceberg。

---
