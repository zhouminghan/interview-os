---
id: STORAGE-0552
type: technical
question: 如何使用Clickhouse的临时表提升性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

临时表存中间结果复用。

# 参考回答

临时表存中间结果，避免重复计算。Memory 引擎临时表在内存中快，session 结束自动删。适合复杂查询的中间结果。

# 追问

- 临时表怎么用？
