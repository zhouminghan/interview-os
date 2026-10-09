---
id: SPARK-0134
type: technical
question: 如何实现Spark SQL的自定义函数？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 UDF、UDAF 扩展标量和聚合函数。

# 参考回答

自定义函数分 UDF 标量函数和 UDAF 聚合函数，用 udf 或继承对应类实现。Python UDF 性能差，优先 Pandas UDF。内置能搞定就别自定义。

# 追问

- Pandas UDF 为什么比普通 UDF 快？
