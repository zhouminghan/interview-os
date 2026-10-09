---
id: SPARK-0109
type: technical
question: DataFrame的UDF是什么？如何使用？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 udf 包装普通函数注册成列函数。

# 参考回答

UDF 是用 udf 把普通函数包装成能作用在列上的函数。Python UDF 性能差，尽量用内置函数或 Pandas UDF。能不用就不用。

# 追问

- Python UDF 为什么慢？
