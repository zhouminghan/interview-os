---
id: STORAGE-0593
type: technical
question: Clickhouse的日志分析最佳实践是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按时间分区排序，列式存日志。

# 参考回答

日志分析用 ClickHouse 按时间分区、设备或应用排序，TTL 归档。聚合函数做统计。适合海量日志的快速分析。

# 追问

- 日志怎么建模？
