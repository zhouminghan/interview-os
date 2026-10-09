---
id: FLINK-0043
type: technical
question: 什么是水位线（Watermark）？它如何工作？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Watermark 标记事件时间进度，处理乱序和迟到。

# 参考回答

Watermark 是插入数据流里的时间标记，表示这个时间之前的数据都到了。按 watermark 触发窗口计算，配合允许迟到处理乱序数据。

# 追问

- watermark 怎么生成？
