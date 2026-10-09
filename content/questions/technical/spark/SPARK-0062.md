---
id: SPARK-0062
type: technical
question: 什么是Spark的累加器？它的作用是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

累加器跨 task 做只加操作的全局计数。

# 参考回答

累加器用于在分布式 task 里做全局聚合，比如计数、求和。它只支持加操作，保证容错，常用于统计坏数据条数这类。

# 追问

- 累加器为什么只支持加法？
