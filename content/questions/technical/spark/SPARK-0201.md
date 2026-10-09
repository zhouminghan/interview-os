---
id: SPARK-0201
type: technical
question: 如何优化Spark的缓存策略？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

只缓存复用的数据，选对级别。

# 参考回答

缓存只对反复用的数据做，选合适级别，内存够用 MEMORY_ONLY，不够 MEMORY_AND_DISK。别什么都缓存，浪费内存。

# 追问

- 什么数据值得缓存？
