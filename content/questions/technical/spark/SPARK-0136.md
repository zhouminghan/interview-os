---
id: SPARK-0136
type: technical
question: 如何实现Spark SQL的自定义数据源？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实现 DataSource 接口，定义读取和写入逻辑。

# 参考回答

自定义数据源要实现 DataSource API，定义怎么读、怎么写、schema 和分区。一般用 RelationProvider 和 CreatableRelationProvider。很少自己写，多用来对接特殊存储。

# 追问

- 什么情况需要自定义数据源？
