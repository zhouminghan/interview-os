---
id: FLINK-0049
type: technical
question: 如何在Flink SQL中处理时间属性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

事件时间用 watermark，处理时间用 proctime。

# 参考回答

Flink SQL 里时间属性分事件时间和处理时间。事件时间列配 watermark，处理时间用 proctime() 生成。窗口和 join 都依赖时间属性。

# 追问

- watermark 在 SQL 里怎么写？
