---
id: SPARK-0147
type: technical
question: Spark Streaming的架构是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

接收器收数据成小批次，Spark 引擎批次处理。

# 参考回答

Spark Streaming 架构是 Receiver 持续接收数据，攒成小 batch，交给 Spark 引擎按批处理。Discretized Stream 就是这些小 batch 的序列。

# 追问

- Receiver 模式有什么问题？
