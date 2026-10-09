---
id: FLINK-0445
type: technical
question: 什么是Kafka的日志清理策略？请详细说明日志删除和日志压缩两种策略的区别和适用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

删除按时间大小，压缩按 key 保留最新。

# 参考回答

日志删除按保留时间或大小删旧数据，适合事件流；日志压缩按 key 只留最新值，适合状态变更。默认删除策略，配置 cleanup.policy 切换。

# 追问

- 两种策略能同时用吗？
