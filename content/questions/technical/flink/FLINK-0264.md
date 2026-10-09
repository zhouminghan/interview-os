---
id: FLINK-0264
type: technical
question: 如何在FlinkSQL中定义事件时间(Event Time)属性和水印(Watermark)生成？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

在 DDL 里配事件时间列和 watermark。

# 参考回答

定义事件时间在 DDL 里指定时间列，配 WATERMARK FOR 时间列 AS 时间减延迟。这样窗口和 join 就用事件时间。

# 追问

- 事件时间列怎么指定？
