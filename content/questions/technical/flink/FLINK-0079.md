---
id: FLINK-0079
type: technical
question: 窗口的移除器（Evictor）是什么？何时使用？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Evictor 在计算前后移除窗口里的数据。

# 参考回答

Evictor 是窗口触发时，在计算前或后移除部分元素，比如只保留最后 N 条。一般用于特殊需求，会破坏增量聚合的省内存优势，尽量少用。

# 追问

- Evictor 为什么影响性能？
