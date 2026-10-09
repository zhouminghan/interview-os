---
id: SPARK-0166
type: technical
question: 什么是Spark Structured Streaming？它的特点是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

基于 DataFrame 的流处理，流批统一，有 exactly-once 语义。

# 参考回答

Structured Streaming 是新一代流处理，把流当无限增长的 DataFrame 处理，跟批处理同一套 API。支持事件时间、窗口、水印和 exactly-once。

# 追问

- 流批统一是什么概念？
