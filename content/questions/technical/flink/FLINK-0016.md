---
id: FLINK-0016
type: technical
question: Flink State 有哪些类型，TTL 机制是什么
topic: [flink, state]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

State 分 Keyed State（Value/List/Map/Reducing/Aggregating）和 Operator State，TTL 用于过期清理。

# 30 秒回答

Keyed State 按 key 存，Operator State 与 key 无关；TTL 给状态设过期时间，到期自动清理，防止状态无限增长。

# 追问

- 什么时候用 MapState？
- TTL 对 RocksDB 怎么生效？
