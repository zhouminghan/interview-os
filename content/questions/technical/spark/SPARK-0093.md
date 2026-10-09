---
id: SPARK-0093
type: technical
question: 什么是RDD的宽依赖和窄依赖？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

窄依赖无 shuffle，宽依赖要 shuffle。

# 参考回答

窄依赖每个子分区只依赖一个父分区，像 map、filter；宽依赖一个子分区依赖多个父分区，像 join、groupByKey，必须 shuffle。宽依赖是 Stage 划分的依据。

# 追问

- 宽依赖和 Stage 的关系？
