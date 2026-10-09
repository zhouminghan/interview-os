---
id: STORAGE-0569
type: technical
question: 解释Clickhouse的查询预编译。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

预编译查询减少重复解析。

# 参考回答

查询预编译把 SQL 编译成执行计划缓存，重复查询省解析开销。适合固定 SQL 高频执行。参数化查询配合。

# 追问

- 预编译怎么用？
