---
id: SPARK-0198
type: technical
question: 如何优化Spark的并行度？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区数设成 core 2 到 3 倍，动态调整。

# 参考回答

并行度就是分区数，一般设成总 core 的 2 到 3 倍。太小浪费资源，太大调度开销。可以用 coalesce、repartition 调整。

# 追问

- 并行度和分区数什么关系？
