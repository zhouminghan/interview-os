---
id: SPARK-0131
type: technical
question: Spark SQL的缓存机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

cacheTable 或 CACHE TABLE 缓存表。

# 参考回答

Spark SQL 缓存用 cacheTable 或 SQL 里的 CACHE TABLE，把表数据缓存到内存，后面查直接复用。适合反复查的小结果表。

# 追问

- 缓存表什么时候失效？
