---
id: FLINK-0124
type: technical
question: Flink与Kafka的集成方式有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka Source 和 Sink，配 offset 和 exactly-once。

# 参考回答

Flink 和 Kafka 集成用 Kafka Source 和 Sink，Source 管 offset 提交，Sink 配合两阶段提交实现 exactly-once。是实时数仓最经典的组合。

# 追问

- offset 怎么管理？
