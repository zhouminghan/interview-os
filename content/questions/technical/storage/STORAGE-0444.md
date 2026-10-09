---
id: STORAGE-0444
type: technical
question: Clickhouse的时间序列数据处理有哪些优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按时间分区排序，聚合优化。

# 参考回答

时序数据优化按时间分区、排序键放设备或时间，用 TTL 归档，聚合函数优化。时间范围查询走分区裁剪。

# 追问

- 时序数据怎么建模？
