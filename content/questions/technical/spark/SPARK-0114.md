---
id: SPARK-0114
type: technical
question: DataFrame的shuffle过程是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

join、groupBy、distinct 会触发 shuffle。

# 参考回答

DataFrame 里 join、groupBy、distinct、repartition 这些宽依赖操作都会 shuffle。优化就是减少 shuffle 次数和数据量，比如 broadcast 小表。

# 追问

- 怎么减少 shuffle？
