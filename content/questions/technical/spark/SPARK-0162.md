---
id: SPARK-0162
type: technical
question: 如何实现Spark Streaming的自定义转换操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 transform 对 DStream 的 RDD 做任意操作。

# 参考回答

自定义转换用 transform，能拿到每个 RDD 做任意转换，复用 RDD 的操作。比内置 DStream 转换更灵活。

# 追问

- transform 和 map 的区别？
