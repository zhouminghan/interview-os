---
id: FLINK-0042
type: technical
question: 解释Flink中的时间语义（事件时间、处理时间、摄入时间）。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

事件时间、处理时间、摄入时间。

# 参考回答

事件时间是数据本身的时间戳，处理时间是算子处理时的系统时间，摄入时间是进 Flink 的时间。事件时间能正确处理乱序，最常用。

# 追问

- 为什么事件时间最重要？
