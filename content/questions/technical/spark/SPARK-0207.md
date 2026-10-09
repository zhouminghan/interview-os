---
id: SPARK-0207
type: technical
question: 如何优化Spark的map操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 mapPartitions 代替 map，减少函数调用。

# 参考回答

map 优化主要是用 mapPartitions 按分区处理，减少每个元素的函数调用开销，还能复用连接等资源。

# 追问

- mapPartitions 什么时候用？
