---
id: FLINK-0282
type: technical
question: 如何在FlinkSQL中实现与Redis的集成？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Redis Connector 或 lookup。

# 参考回答

Flink SQL 和 Redis 集成可以用 Redis Connector 做 lookup 或 sink，存实时结果供查询。常见实时大屏查 Redis。

# 追问

- Redis 在实时链路里做什么？
