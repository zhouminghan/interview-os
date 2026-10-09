---
id: SPARK-0204
type: technical
question: 如何优化Spark的groupBy操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

提前过滤、预聚合、减少基数。

# 参考回答

groupBy 优化先 filter 减数据，再用 reduceByKey 做 map 端预聚合，避免 groupByKey 全量 shuffle。基数高可以加盐打散。

# 追问

- reduceByKey 的预聚合在哪发生？
