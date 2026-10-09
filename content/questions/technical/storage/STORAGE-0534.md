---
id: STORAGE-0534
type: technical
question: 如何处理Clickhouse的慢查询？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看 query_log 和计划定位。

# 参考回答

慢查询先看 query_log 的耗时和扫描行数，再看 EXPLAIN 计划。扫描量大就优化排序键和分区，聚合慢就加物化视图。

# 追问

- 慢查询怎么排查？
