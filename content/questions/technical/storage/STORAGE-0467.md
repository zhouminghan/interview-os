---
id: STORAGE-0467
type: technical
question: 什么是Clickhouse的物化视图？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

物化视图预存聚合结果。

# 参考回答

物化视图把查询结果预先算好存到目标表，查询命中直接复用。适合高频聚合。写入时触发更新，注意刷新和一致性。

# 追问

- 物化视图怎么刷新？
