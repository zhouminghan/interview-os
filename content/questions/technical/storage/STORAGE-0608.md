---
id: STORAGE-0608
type: technical
question: Clickhouse的跨表查询优化技巧有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少 join，预聚合。

# 参考回答

跨表查询优化减少 join、先预聚合、小表广播或字典。ClickHouse 跨表 join 弱，尽量单表宽表。

# 追问

- 跨表怎么优化？
