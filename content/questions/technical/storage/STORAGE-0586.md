---
id: STORAGE-0586
type: technical
question: 解释Clickhouse的物化视图自动更新机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

源表写入时增量触发。

# 参考回答

物化视图在源表写入时自动触发，把增量数据算进目标表。是增量的，不手动刷新。查询读目标表结果。

# 追问

- 物化视图怎么更新？
