---
id: STORAGE-0506
type: technical
question: Clickhouse的嵌套表如何查询？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Nested 字段用 ARRAY JOIN 展开查。

# 参考回答

Nested 表是平行数组，查询用 ARRAY JOIN 展开成多行。或直接数组函数处理。适合一对多的嵌套数据。

# 追问

- Nested 怎么展开？
