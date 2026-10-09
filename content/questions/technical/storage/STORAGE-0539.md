---
id: STORAGE-0539
type: technical
question: 如何优化Clickhouse的JOIN操作？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

小表 join 大表，用字典替代维表。

# 参考回答

JOIN 优化小表放右边、用字典替代维表 join、先预聚合减少数据量。ClickHouse join 弱，尽量避免大表 join 大表。

# 追问

- join 怎么优化？
