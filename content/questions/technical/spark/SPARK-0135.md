---
id: SPARK-0135
type: technical
question: Spark SQL的数据类型系统是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

支持基础类型、复杂类型和用户自定义类型。

# 参考回答

Spark SQL 有基础类型整型、字符串、时间，复杂类型 array、map、struct，还能自定义类型。和 DataFrame schema 对应。

# 追问

- struct 和 map 有什么区别？
