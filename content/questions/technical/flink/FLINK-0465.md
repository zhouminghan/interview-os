---
id: FLINK-0465
type: technical
question: 在Kafka集群中，如何实现消息的追踪和调试？请详细说明追踪和调试工具的使用方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 kafka-console、kafka-dump-log 等工具排查。

# 参考回答

追踪调试用命令行工具，比如 kafka-console-consumer 看消息、kafka-dump-log 看日志文件、describe 看分区状态。定位消息和分区问题。

# 追问

- 怎么查某条消息在哪？
