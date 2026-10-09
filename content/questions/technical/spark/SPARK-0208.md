---
id: SPARK-0208
type: technical
question: 如何优化Spark的reduce操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 reduceByKey 做 map 端预聚合。

# 参考回答

reduce 优化优先 reduceByKey，它在 map 端先局部聚合，减少 shuffle 数据量，比 groupByKey 再 reduce 快很多。

# 追问

- reduceByKey 和 groupByKey 的差异？
