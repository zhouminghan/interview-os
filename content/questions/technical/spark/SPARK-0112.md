---
id: SPARK-0112
type: technical
question: DataFrame的缓存机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

cache 或 persist，默认 MEMORY_AND_DISK。

# 参考回答

DataFrame 缓存用 cache 或 persist，默认级别是 MEMORY_AND_DISK，跟 RDD 默认不一样。缓存复用的表能省重复计算。

# 追问

- DataFrame 默认缓存级别为什么不同？
