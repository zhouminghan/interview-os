---
id: FLINK-0242
type: technical
question: 解释如何在FlinkSQL中使用JDBC连接器与关系型数据库交互。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配 url、表名、账号密码读写关系库。

# 参考回答

JDBC 连接器配 url、表名、用户名密码，Source 读表、Sink 写表、lookup 关联维表。批量写要配 batch size。

# 追问

- lookup 和 sink 有什么不同？
