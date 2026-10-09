---
id: SPARK-0066
type: technical
question: 什么是Spark的checkpoint？它的作用是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpoint 把数据落可靠存储，截断血缘。

# 参考回答

checkpoint 是把 RDD 数据写到可靠存储比如 HDFS，截断长血缘，容错恢复时不用从头算。跟 cache 不同，它不占内存，但要重新读盘。

# 追问

- checkpoint 和 cache 的区别？
