---
id: SPARK-0230
type: technical
question: 什么是Spark Koalas？它的主要功能是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 pandas API 跑在 Spark 上。

# 参考回答

Koalas 是让 pandas 代码直接跑在 Spark 上的兼容层，pandas API 对应 DataFrame。后来并入了 PySpark 的 pandas API，方便 pandas 用户上 Spark。

# 追问

- Koalas 和 pandas 有什么区别？
