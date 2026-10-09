---
id: STORAGE-0558
type: technical
question: 如何处理Clickhouse的重复聚合计算？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用物化视图或预聚合表。

# 参考回答

重复聚合用物化视图或 SummingMergeTree 预聚合，避免每次现算。查询命中预聚合结果，省重复计算。

# 追问

- 重复聚合怎么优化？
