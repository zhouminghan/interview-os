---
id: STORAGE-0508
type: technical
question: Clickhouse的DISTINCT操作有哪些优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 uniq 近似代替精确去重。

# 参考回答

DISTINCT 精确去重代价高，能接受误差用 uniq 系列近似函数。uniqCombined 内存省。精确去重用 group by 比 distinct 有时更快。

# 追问

- distinct 怎么优化？
