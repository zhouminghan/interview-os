---
id: SPARK-0164
type: technical
question: 如何实现Spark Streaming的自定义数据源？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实现自定义 Receiver 接收特殊数据。

# 参考回答

自定义数据源主要就是写自定义 Receiver，从特殊系统接收数据再 store 进 Spark。核心是实现 onStart 接收逻辑和 onStop 停止。

# 追问

- 自定义数据源有哪些坑？
