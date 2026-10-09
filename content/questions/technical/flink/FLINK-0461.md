---
id: FLINK-0461
type: technical
question: 在Kafka集群中，如何实现消息的批量处理？请详细说明批量处理的设计和实现方式。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

生产端批量发送，消费端批量拉取。

# 参考回答

批量处理在生产端攒一批消息一起发，消费端一次拉一批处理，减少网络和 IO 开销提高吞吐。批量大小按延迟和吞吐权衡。

# 追问

- 批量太大会怎样？
