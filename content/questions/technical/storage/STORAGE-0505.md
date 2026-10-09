---
id: STORAGE-0505
type: technical
question: 如何使用Clickhouse的数组类型存储多值字段？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

字段定义 Array 类型。

# 参考回答

字段用 Array(类型) 存多值，写入数组字面量，查询用数组函数。适合标签、多值属性。配 arrayJoin 展开。

# 追问

- Array 怎么查询？
