---
id: FLINK-0348
type: technical
question: 如何在SQL Client中管理用户自定义函数(UDF)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 CREATE FUNCTION 注册 UDF。

# 参考回答

SQL Client 里用 CREATE FUNCTION 注册 UDF，指定函数名和实现类。UDF 的 jar 包要放在 classpath 里。注册后就能在 SQL 里调用。

# 追问

- UDF 的 jar 放哪？
