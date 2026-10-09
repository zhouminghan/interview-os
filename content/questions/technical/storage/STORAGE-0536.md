---
id: STORAGE-0536
type: technical
question: 如何选择合适的Clickhouse表引擎？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分析用 MergeTree 族。

# 参考回答

表引擎选择：分析场景用 MergeTree 族，去重用 ReplacingMergeTree，聚合用 Summing/AggregatingMergeTree，小表临时用 Log 或 Memory。按数据特性选。

# 追问

- 引擎怎么选？
