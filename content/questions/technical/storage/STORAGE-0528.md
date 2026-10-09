---
id: STORAGE-0528
type: technical
question: 如何使用Clickhouse的Profile工具分析查询性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看查询日志和 system 表分析。

# 参考回答

分析查询性能看 query_log 系统表，记录查询耗时、扫描行数、内存。用 EXPLAIN 看计划。定位慢查询的扫描和聚合。

# 追问

- 慢查询怎么定位？
