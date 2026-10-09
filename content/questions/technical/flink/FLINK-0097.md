---
id: FLINK-0097
type: technical
question: 如何在Flink CEP中处理时间约束？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

within 定义模式匹配的时间窗口。

# 参考回答

CEP 时间约束用 within 限制整个模式必须在多长时间内匹配完，超时就不算。配合事件时间或处理时间用。

# 追问

- 超时的事件怎么处理？
