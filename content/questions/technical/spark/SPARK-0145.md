---
id: SPARK-0145
type: technical
question: Spark SQL的物化视图是什么？如何使用？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Spark 里物化视图主要靠缓存或第三方实现。

# 参考回答

Spark SQL 原生物化视图能力有限，主要靠 cache 缓存，或第三方工具。本质是把查询结果预存，查询直接复用。可以理解为持久化的缓存表。

# 追问

- 物化视图和 cache 的区别？
