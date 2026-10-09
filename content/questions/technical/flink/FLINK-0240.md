---
id: FLINK-0240
type: technical
question: 如何在FlinkSQL中配置和使用Kafka连接器？详细说明其参数。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配 topic、bootstrap servers、format。

# 参考回答

Kafka 连接器在 DDL 里配 topic、bootstrap.servers、format，还有 offset、group id 这些。Source 和 Sink 都要配 format 序列化格式。

# 追问

- Kafka format 怎么选？
