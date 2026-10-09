---
id: STORAGE-0457
type: technical
question: 解释Clickhouse的跳数索引（Skip Index）。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

跳数索引快速跳过无关数据块。

# 参考回答

跳数索引在每个数据块上存统计信息，查询时先判断块是否可能匹配，不匹配直接跳过。有 minmax、set、bloom filter 类型，加速过滤。

# 追问

- 跳数索引怎么加速？
