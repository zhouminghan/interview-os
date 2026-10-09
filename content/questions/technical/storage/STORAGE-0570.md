---
id: STORAGE-0570
type: technical
question: 如何优化Clickhouse的聚合函数性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用近似聚合和预聚合。

# 参考回答

聚合优化用 uniq 近似代替 count distinct，预聚合减少实时聚合，减少分组基数。聚合本身 ClickHouse 已高度优化。

# 追问

- 聚合怎么优化？
