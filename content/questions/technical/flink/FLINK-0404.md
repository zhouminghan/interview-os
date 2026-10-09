---
id: FLINK-0404
type: technical
question: 如何将FlinkSQL与Apache Kafka生态系统集成？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka 做 Source 和 Sink，配 format 和 offset。

# 参考回答

Flink SQL 和 Kafka 集成用 Kafka 连接器，Source 消费 topic，Sink 写 topic，配 format、offset 和 group。是实时数仓的标准组合。

# 追问

- exactly-once 怎么配？
