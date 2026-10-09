---
id: STARROCKS-0190
type: technical
question: StarRocks 中大数据量排序查询如何优化？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

避免全量排序，用排序键和 limit 提前截断。

# 参考回答

大数据量排序代价高，优化靠排序键让数据本来就按序，或加 limit 让 TopN 提前截断。全局排序能避免就避免，大多场景其实只要 TopN。

# 追问

- 为什么大多只要 TopN？
