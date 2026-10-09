---
id: STORAGE-0542
type: technical
question: Clickhouse的CPU使用率过高如何排查？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看慢查询和并发定位。

# 参考回答

CPU 高看 query_log 找耗时查询，看并发查询数。聚合复杂、扫描大、join 都会吃 CPU。优化 SQL 或限制并发。

# 追问

- CPU 高怎么定位？
