---
id: STORAGE-0527
type: technical
question: 解释Clickhouse的查询优化器工作原理。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

规则优化加索引下推。

# 参考回答

ClickHouse 优化器做谓词下推、索引选择、并行计划。不像传统库有复杂 CBO，它更靠索引和向量化。查询优化偏轻量。

# 追问

- 优化器做什么？
