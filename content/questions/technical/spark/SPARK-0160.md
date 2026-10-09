---
id: SPARK-0160
type: technical
question: 如何实现Spark Streaming的自定义输出操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 foreachRDD 自定义写出逻辑。

# 参考回答

自定义输出用 foreachRDD，拿到每个 batch 的 RDD 自己写出去，比如写 Kafka、数据库。注意别把连接对象序列化，要在 worker 端建连接。

# 追问

- foreachRDD 里建连接要注意什么？
