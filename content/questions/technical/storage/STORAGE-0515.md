---
id: STORAGE-0515
type: technical
question: 如何处理Clickhouse中的重复数据？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 ReplacingMergeTree 或去重。

# 参考回答

重复数据用 ReplacingMergeTree 引擎按主键去重，或用 group by、uniq 查询时去重。ReplacingMergeTree 是异步合并，查询要配合。

# 追问

- 去重怎么保证？
