---
id: STORAGE-0036
type: technical
question: 什么是Hive的UDF？如何自定义UDF？请详细说明UDF的类型、开发方法、部署步骤和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

UDF 是自定义函数，扩展 SQL 能力。

# 参考回答

Hive UDF 有标量 UDF、聚合 UDAF、表生成 UDTF。开发写类实现接口，打 jar 包，add jar 后 create function 注册。内置函数不够用时扩展。

# 追问

- UDF 性能怎么样？
