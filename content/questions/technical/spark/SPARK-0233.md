---
id: SPARK-0233
type: technical
question: 什么是Spark Thrift Server？它的主要功能是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 JDBC 提供 SQL 查询服务。

# 参考回答

Thrift Server 是 Spark 的 SQL 服务，客户端通过 JDBC 或 beeline 连接，用 SQL 查 Spark。适合给 BI 工具提供统一查询入口。

# 追问

- Thrift Server 适合什么场景？
