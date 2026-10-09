---
id: SPARK-0087
type: technical
question: RDD的缓存机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

cache 或 persist 把数据缓存到内存磁盘复用。

# 参考回答

缓存就是把计算好的 RDD 存到内存或磁盘，后面再用就不用重算。用 cache 或 persist 指定级别。适合被多次复用的数据，比如 join 两边的表。

# 追问

- 什么数据值得缓存？
