---
id: SPARK-0140
type: technical
question: 如何实现Spark SQL的自定义SerDe？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实现序列化反序列化接口，注册自定义格式。

# 参考回答

SerDe 是序列化和反序列化器，自定义要实现对数据的解析和写出。用于读写自定义格式。很少自己写，Parquet、ORC 已经够用。

# 追问

- SerDe 和序列化的区别？
