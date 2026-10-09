---
id: STORAGE-0560
type: technical
question: 如何优化Clickhouse的数组操作性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

避免频繁展开大数组。

# 参考回答

数组操作避免频繁 arrayJoin 展开大数组，能用数组聚合就用数组聚合。数组函数本身优化过，但展开会放大数据量。

# 追问

- 数组怎么优化？
