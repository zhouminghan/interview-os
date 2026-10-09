---
id: FLINK-0083
type: technical
question: 如何实现自定义水位线生成器？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实现 WatermarkGenerator 接口。

# 参考回答

自定义水位线生成器要实现 WatermarkGenerator，写 onEvent 和 onPeriodicEmit，按事件时间或周期生成 watermark。配合 assignTimestampsAndWatermarks 使用。

# 追问

- onEvent 和 onPeriodicEmit 区别？
