---
id: FLINK-0015
type: technical
question: Flink 的事件时间和处理时间、Watermark 是什么
topic: [flink, time, watermark]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

事件时间是数据本身的时间，处理时间是算子处理时间；Watermark 是事件时间推进的进度标记。

# 30 秒回答

窗口按事件时间计算要 Watermark 触发，处理时间窗口由系统时钟触发；Watermark 表示「小于该时间的数据都到了」，用于处理迟到数据。

# 追问

- Watermark 怎么生成？
- 迟到数据怎么处理？
