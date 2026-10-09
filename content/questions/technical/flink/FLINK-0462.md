---
id: FLINK-0462
type: technical
question: 请详细说明Kafka的日志管理机制，包括日志清理、日志压缩等策略，以及如何优化日志存储空间。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

日志按段管理，清理删除或压缩。

# 参考回答

日志分多个段文件，按保留时间或大小删除，或用日志压缩按 key 留最新。优化存储靠合理保留期、压缩和分层存储。

# 追问

- 分层存储是什么？
