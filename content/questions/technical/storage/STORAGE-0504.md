---
id: STORAGE-0504
type: technical
question: 解释Clickhouse的IN子句优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

IN 会转成哈希集合加速。

# 参考回答

ClickHouse IN 子句会把值转成哈希集合，查找快。大量值时用 IN 或 join。IN 值太多注意内存。

# 追问

- IN 和 join 怎么选？
