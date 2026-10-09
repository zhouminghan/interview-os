---
id: STORAGE-0540
type: technical
question: 解释Clickhouse的查询计划。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

EXPLAIN 看执行计划。

# 参考回答

EXPLAIN 查看查询计划，看扫描范围、索引使用、join 方式、并行度。分析慢查询先看计划，定位扫描量大和 join 慢。

# 追问

- 计划里看什么？
