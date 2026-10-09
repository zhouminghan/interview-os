---
id: STORAGE-0485
type: technical
question: Clickhouse的数组函数arrayJoin的作用是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

arrayJoin 把数组展开成多行。

# 参考回答

arrayJoin 把数组字段的每个元素展开成一行，类似 explode。用于行转列，把多值字段拆开分析。

# 追问

- arrayJoin 怎么用？
