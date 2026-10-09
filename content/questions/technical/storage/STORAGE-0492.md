---
id: STORAGE-0492
type: technical
question: Clickhouse的JOIN操作有哪些限制？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JOIN 是弱项，大表 join 慢。

# 参考回答

ClickHouse JOIN 偏弱，适合小表 join 大表，大表 join 大表性能差。没有好的 join 优化器。多表 join 建议先预聚合或换引擎。

# 追问

- JOIN 怎么优化？
