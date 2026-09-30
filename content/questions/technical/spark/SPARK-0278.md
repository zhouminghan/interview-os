---
id: SPARK-0278
type: technical
question: Spark Streaming 内部如何工作？
difficulty: 0
topic: []
source_type: knowledge
---

Spark 流监听来自各种来源的实时数据流，接收到数据后，将其分成可以由 Spark 引擎处理的小批次，这些小批次数据由 Spark 引擎处理以生成结果数据的输出流。

在内部，Spark 使用称为 **DStream**（离散流）的抽象。DStream 是连续的数据流，可以从 Kafka、Flume、Kinesis 等创建 DStream，DStream 实际上是 Spark 中一系列 RDD 的序列，可以对这一系列 RDD 应用转换和行动来创建进一步的 RDD。

---
