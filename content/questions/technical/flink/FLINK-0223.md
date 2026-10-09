---
id: FLINK-0223
type: technical
question: 解释FlinkSQL中的Catalog概念及其作用。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

元数据管理，存表、库、函数。

# 参考回答

Catalog 管理 Flink SQL 的元数据，存数据库、表、视图、函数的定义。对接 Hive Metastore 复用 Hive 元数据。

# 追问

- Catalog 有哪几种实现？
