---
id: STARROCKS-0167
type: technical
question: StarRocks 如何与 Kafka 集成实现实时数据分析？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Routine Load 订阅 Kafka，实时写入做分析。

# 参考回答

用 Routine Load 订阅 Kafka topic，持续消费实时写入，配合主键模型做更新，实现秒级可见的实时分析。这是实时数仓最常见的链路。

# 追问

- Kafka 到 StarRocks 的实时链路？
