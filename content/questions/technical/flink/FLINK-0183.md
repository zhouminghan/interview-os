---
id: FLINK-0183
type: technical
question: Flink的事件时间处理机制的实现原理。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

watermark 推进事件时间，触发窗口和定时器。

# 参考回答

事件时间靠 watermark 推进，算子按事件时间排序处理，窗口和定时器按 watermark 触发。乱序用 watermark 容忍和迟到处理。

# 追问

- 事件时间和处理时间的取舍？
