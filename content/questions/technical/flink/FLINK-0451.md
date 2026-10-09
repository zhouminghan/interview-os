---
id: FLINK-0451
type: technical
question: 在Kafka集群中，如何实现消息的持久化存储？请详细说明存储层的设计，以及如何优化存储性能。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

消息顺序写日志文件落盘。

# 参考回答

Kafka 消息顺序追加写日志文件持久化，靠页缓存和顺序 IO 提速。优化用 SSD、多磁盘、合理分区和清理策略。

# 追问

- 顺序写为什么快？
