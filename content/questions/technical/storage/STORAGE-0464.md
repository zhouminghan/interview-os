---
id: STORAGE-0464
type: technical
question: Clickhouse的数组数据类型如何使用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Array 存多值，配数组函数处理。

# 参考回答

Array 类型存多值字段，用 array 函数做展开、过滤、聚合。适合标签、多值属性。配合 arrayJoin 展开分析。

# 追问

- Array 怎么展开？
