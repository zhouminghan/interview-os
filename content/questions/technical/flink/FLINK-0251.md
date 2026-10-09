---
id: FLINK-0251
type: technical
question: 如何在FlinkSQL中注册和使用Python UDF？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 PyFlink 定义，注册后在 SQL 用。

# 参考回答

Python UDF 在 PyFlink 里用 udf 装饰器定义，注册后 SQL 调用。注意性能，频繁调用会有跨语言开销，能用内置函数就用内置。

# 追问

- Python UDF 性能怎么样？
