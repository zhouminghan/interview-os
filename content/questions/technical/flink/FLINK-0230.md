---
id: FLINK-0230
type: technical
question: FlinkSQL中的JDBC Connector如何配置和使用？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 JDBC 读写数据库表。

# 参考回答

JDBC Connector 在 DDL 里配 url、表名、用户名密码，就能读写关系库。可以做 lookup 和 sink，注意批量写。

# 追问

- JDBC sink 怎么批量写？
