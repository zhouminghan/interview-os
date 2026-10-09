---
id: FLINK-0272
type: technical
question: 如何在FlinkSQL中实现事件时间和处理时间的转换？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

一般不在 SQL 里直接互转，各自用。

# 参考回答

事件时间和处理时间一般不直接转换，它们语义不同。事件时间从字段来，处理时间用 proctime。混用容易出错。

# 追问

- 什么情况会混用？
