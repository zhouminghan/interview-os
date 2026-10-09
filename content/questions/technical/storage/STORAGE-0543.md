---
id: STORAGE-0543
type: technical
question: 什么是Clickhouse的预聚合？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

提前算好聚合结果。

# 参考回答

预聚合用 SummingMergeTree、AggregatingMergeTree 或物化视图，提前算好聚合，查询直接读结果。省查询时实时聚合。

# 追问

- 预聚合怎么做？
