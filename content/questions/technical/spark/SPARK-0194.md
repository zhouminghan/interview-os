---
id: SPARK-0194
type: technical
question: Structured Streaming的水印机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

水印定义迟到容忍，超时数据丢弃。

# 参考回答

水印是事件时间上的一个阈值，表示最多容忍数据迟到多久。超过水印的迟到数据被丢弃。用 withWatermark 设置，配合窗口。

# 追问

- 为什么要有水印？
