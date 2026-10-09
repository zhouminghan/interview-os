---
id: STORAGE-0493
type: technical
question: 写出使用字典（Dictionary）的SQL示例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

dictGet 函数查字典。

# 参考回答

字典用 dictGet(字典名, 字段, 键) 查值，做维表映射。先建字典再在查询里用 dictGet 关联。比 join 快。

# 追问

- dictGet 怎么用？
