---
id: FLINK-0060
type: technical
question: 状态TTL（生存时间）是什么？如何配置？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

给状态设过期时间，自动清理。

# 参考回答

状态 TTL 是给状态设置存活时间，超过就自动清理，防止状态无限增长。配置 StateTtlConfig，指定过期时间和清理策略。注意 TTL 用处理时间还是事件时间。

# 追问

- 状态不清理会怎样？
