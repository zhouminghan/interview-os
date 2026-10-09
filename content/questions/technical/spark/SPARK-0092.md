---
id: SPARK-0092
type: technical
question: RDD的容错机制是如何实现的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠血缘重算，配合 checkpoint 加速恢复。

# 参考回答

RDD 容错靠血缘，分区丢了从上游重算。因为 RDD 不可变，重算结果一致。长链加 checkpoint 截断，恢复更快。宽依赖的数据 shuffle 落盘也减少重算量。

# 追问

- 为什么 RDD 不可变有利于容错？
