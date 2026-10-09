---
id: FLINK-0434
type: technical
question: 请详细解释Kafka中的消息时间戳机制，以及如何利用时间戳进行消息查询和过滤？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

消息带时间戳，可按时间定位。

# 参考回答

Kafka 消息带时间戳，可以用 offset 或时间戳定位消费位置。按时间查询或过滤用 timestamp 找 offset，再从该位置消费。

# 追问

- 按时间定位怎么用？
