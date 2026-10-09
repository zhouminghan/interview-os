---
id: FLINK-0423
type: technical
question: Kafka的消息存储机制是怎样的？请详细说明消息在磁盘上的存储格式，以及为什么Kafka选择这种存储方式？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

顺序追加写日志文件，用 offset 定位。

# 参考回答

Kafka 把消息顺序追加写到日志文件，每条消息有 offset。顺序写磁盘很快，靠 offset 和索引定位。这种设计让 Kafka 高吞吐、可持久化。

# 追问

- 顺序写为什么快？
