---
id: SPARK-0055
type: technical
question: 解释Spark中的宽依赖和窄依赖。
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

窄依赖一个父分区对应一个子分区，宽依赖是一对多要 shuffle。

# 参考回答

窄依赖是子 RDD 一个分区只依赖父 RDD 一个分区，比如 map、filter，不用 shuffle；宽依赖是一个子分区依赖多个父分区，比如 groupByKey、join，要 shuffle。宽依赖就是 Stage 的边界。

# 追问

- 宽依赖为什么是 Stage 边界？
