---
id: SPARK-0214
type: technical
question: 如何优化Spark的内存溢出问题？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少单 task 数据、调内存、避免 collect 大结果。

# 参考回答

OOM 优化减少单 task 处理的数据量，调高 executor 内存，避免 collect 大结果到 driver，用序列化省内存。看是 driver 还是 executor OOM。

# 追问

- driver OOM 和 executor OOM 怎么区分？
