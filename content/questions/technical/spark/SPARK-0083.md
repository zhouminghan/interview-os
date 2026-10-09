---
id: SPARK-0083
type: technical
question: RDD的依赖关系有哪些类型？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

窄依赖一对一分区，宽依赖一对多要 shuffle。

# 参考回答

依赖分窄依赖和宽依赖。窄依赖子分区只依赖一个父分区，比如 map；宽依赖一个子分区依赖多个父分区，比如 groupByKey。宽依赖决定 Stage 边界和 shuffle。

# 追问

- 哪些算子产生宽依赖？
