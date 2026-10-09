---
id: SPARK-0090
type: technical
question: 如何优化RDD的操作性能？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少 shuffle、用宽依赖少的算子、合理缓存和分区。

# 参考回答

优化 RDD 主要减少 shuffle，比如用 reduceByKey 代替 groupByKey，减少数据量用 filter 提前过滤，合理分区，复用数据加 cache。本质还是少 shuffle 少数据。

# 追问

- reduceByKey 为什么比 groupByKey 好？
