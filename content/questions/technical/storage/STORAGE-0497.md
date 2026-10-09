---
id: STORAGE-0497
type: technical
question: 解释Clickhouse的GROUP BY CUBE操作。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CUBE 做多维度组合聚合。

# 参考回答

GROUP BY CUBE 对所有维度组合做聚合，加上 ROLLUP 做层级汇总。适合多维分析，但组合多结果大。

# 追问

- CUBE 和 ROLLUP 区别？
