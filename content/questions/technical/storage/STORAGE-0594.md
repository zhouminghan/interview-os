---
id: STORAGE-0594
type: technical
question: 解释Clickhouse的时间序列数据建模。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

时间分区加设备排序。

# 参考回答

时序建模按时间分区、设备或指标排序，TTL 过期。适合监控指标、设备数据。聚合函数算趋势和统计。

# 追问

- 时序怎么建模？
