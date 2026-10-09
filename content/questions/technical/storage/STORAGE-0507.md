---
id: STORAGE-0507
type: technical
question: 写出使用ARRAY JOIN展开数组的SQL示例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SELECT 后加 ARRAY JOIN 数组字段。

# 参考回答

用 ARRAY JOIN 或 LEFT ARRAY JOIN 把数组字段展开成多行。SELECT ... ARRAY JOIN tags，tags 的每个元素一行。

# 追问

- ARRAY JOIN 语法？
