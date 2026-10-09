---
id: STORAGE-0469
type: technical
question: 解释Clickhouse的MergeTree家族引擎的区别。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MergeTree 是基础，其他是变体。

# 参考回答

MergeTree 家族有 ReplacingMergeTree 去重、SummingMergeTree 预聚合、AggregatingMergeTree 聚合、Replicated 系列做副本。按数据特性选。

# 追问

- SummingMergeTree 适合什么？
