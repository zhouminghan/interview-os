---
id: SPARK-0149
type: technical
question: Spark Streaming支持哪些数据源？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka、Socket、文件、Flume 等。

# 参考回答

数据源有 Kafka、TCP Socket、文件系统、Flume、自定义 Receiver。生产上 Kafka 最主流，用 Direct 方式直连，不依赖 Receiver。

# 追问

- Direct 方式比 Receiver 好在哪里？
