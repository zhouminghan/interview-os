---
id: STORAGE-0521
type: technical
question: Clickhouse的系统表system.tables存储哪些信息？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

表名、引擎、行数、大小。

# 参考回答

system.tables 存表名、引擎、库、行数、大小、创建时间。用于监控表大小和数据量，做容量管理。

# 追问

- system.tables 看什么？
