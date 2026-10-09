---
id: FLINK-0431
type: technical
question: 请详细解释Kafka中的消息格式演进过程，以及不同版本之间的兼容性是如何保证的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

消息格式带版本号，向后兼容。

# 参考回答

Kafka 消息格式经历了多个版本，新格式带版本号，broker 能读旧格式。升级要按官方顺序，保证新老客户端兼容。

# 追问

- 版本升级要注意什么？
