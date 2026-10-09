---
id: STARROCKS-0114
type: technical
question: 时序数据在 StarRocks 中如何建模？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

时序数据按时间分区，排序键放设备 id 加时间。

# 参考回答

时序数据建模核心是时间分区加设备 id 这类标识分桶，排序键放设备 id 和时间。这样按设备查时间序列只扫一个分区的一段数据，非常快。

# 追问

- 时序数据为什么适合按设备分桶？
