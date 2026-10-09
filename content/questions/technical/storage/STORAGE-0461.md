---
id: STORAGE-0461
type: technical
question: 解释Clickhouse的聚合函数优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

聚合函数有优化实现和近似算法。

# 参考回答

ClickHouse 聚合函数高度优化，有近似聚合 uniq、count distinct 优化。按数据分布用单线程或多线程聚合。聚合是它的强项。

# 追问

- 近似聚合怎么用？
