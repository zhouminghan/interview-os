---
id: FLINK-0429
type: technical
question: Kafka的日志清理策略有哪些？请详细说明日志删除和日志压缩两种策略的区别和适用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

删除按时间或大小，压缩按 key 保留最新。

# 参考回答

日志删除按时间或大小删旧数据；日志压缩按 key 只保留每个 key 的最新值，适合状态变更类数据。默认是删除策略。

# 追问

- 日志压缩适合什么？
