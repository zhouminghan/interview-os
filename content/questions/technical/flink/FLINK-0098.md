---
id: FLINK-0098
type: technical
question: Flink CEP如何处理乱序事件？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配事件时间和 watermark，或处理时间避免乱序影响。

# 参考回答

CEP 乱序处理靠事件时间加 watermark，模式按事件时间排序匹配。乱序严重时要配合 watermark 容忍，或对关键场景用处理时间。

# 追问

- 事件时间对 CEP 为什么重要？
