---
id: FLINK-0219
type: technical
question: 什么是FlinkSQL中的时间属性(Time Attribute)？有哪几种类型？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

事件时间和处理时间两种。

# 参考回答

时间属性分事件时间和处理时间。事件时间从数据字段取，配 watermark；处理时间用 proctime()。窗口和 join 都要指定时间属性。

# 追问

- 时间属性在哪指定？
