---
id: STORAGE-0473
type: technical
question: Clickhouse支持哪些客户端连接方式？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

命令行、JDBC、HTTP 接口。

# 参考回答

ClickHouse 支持命令行客户端、JDBC、ODBC、HTTP 接口。程序用 JDBC，BI 用 HTTP 或驱动。原生 TCP 协议性能最好。

# 追问

- 客户端怎么选？
