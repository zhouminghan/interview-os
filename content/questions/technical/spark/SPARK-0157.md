---
id: SPARK-0157
type: technical
question: Spark Streaming的并行度如何设置？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调 Receiver 数和分区数提高并行。

# 参考回答

并行度靠多个 Receiver 并行接收，数据处理分区数决定 task 数。分区数跟 core 数匹配，别太多太少。

# 追问

- Receiver 数和分区数怎么配合？
