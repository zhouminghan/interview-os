---
id: FLINK-0231
type: technical
question: 解释FlinkSQL中的UDF、UDAF和UDTF的概念及如何实现。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

标量、聚合、表函数三种自定义函数。

# 参考回答

UDF 是标量函数，UDAF 是聚合函数，UDTF 是表函数，一条进多条出。分别用对应接口实现，注册后在 SQL 用。

# 追问

- UDTF 适合什么？
