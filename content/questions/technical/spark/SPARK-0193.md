---
id: SPARK-0193
type: technical
question: 如何实现Structured Streaming的自定义触发器？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 trigger 控制触发时机。

# 参考回答

触发器 trigger 控制什么时候处理，有默认微批、固定间隔、一次性、连续模式。按延迟和成本选。

# 追问

- 连续模式和微批模式的区别？
