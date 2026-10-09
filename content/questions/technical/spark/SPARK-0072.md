---
id: SPARK-0072
type: technical
question: 如何配置Spark的并行度？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

并行度决定 task 数，一般设成 core 数的 2 到 3 倍。

# 参考回答

并行度就是 task 数量，决定任务多细。一般设成总 core 数的 2 到 3 倍，太小浪费资源，太大调度开销大。可以按数据量和 shuffle 分区数调。

# 追问

- 并行度过大或过小有什么问题？
