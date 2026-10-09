---
id: SPARK-0123
type: technical
question: Spark SQL的UDF是什么？如何使用？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

spark.udf.register 注册 SQL 函数。

# 参考回答

Spark SQL 的 UDF 用 udf 包装后 register 注册，就能在 SQL 里用。和 DataFrame UDF 类似，但注册后 SQL 可调用。

# 追问

- SQL UDF 和 DataFrame UDF 有什么不同？
