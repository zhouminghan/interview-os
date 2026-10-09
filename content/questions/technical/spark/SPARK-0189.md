---
id: SPARK-0189
type: technical
question: 如何实现Structured Streaming的自定义接收器？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Structured 用自定义 Source 代替 Receiver。

# 参考回答

Structured Streaming 没有 Receiver 概念，自定义接收靠实现 Source 接口。从自定义系统读流数据。

# 追问

- Source 接口要实现哪些方法？
