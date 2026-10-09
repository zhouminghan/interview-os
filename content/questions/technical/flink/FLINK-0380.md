---
id: FLINK-0380
type: technical
question: 如何使用FlinkSQL进行时序数据分析？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用事件时间和窗口做时间序列聚合。

# 参考回答

时序分析用事件时间和窗口做按时间聚合，比如滑动窗口算移动平均、环比。配合 watermark 处理乱序。适合设备监控、指标趋势。

# 追问

- 时序分析为什么用事件时间？
