---
id: STORAGE-0669
type: technical
question: 连接应用到 Hive 服务器有哪些方式？
difficulty: 0
topic: []
source_type: knowledge
---

可以使用以下选项将应用程序连接到 Hive 服务器：

- **JDBC Driver**：可以使用 JDBC Driver 通过嵌入式和远程访问连接到 HiveServer。这是用于基于 Java 的连接。
- **Python Client**：对于 Python 语言应用，有可以连接到 Hive 服务器的 Python 客户端。
- **Ruby Client**：通过 Ruby 客户端驱动程序也可以连接到 Hive 服务器。
- **Thrift Client**：可以使用 Beeline 命令行 Shell 通过 Thrift 连接到 Hive 服务器。对于生产模式，这是一个非常好的选择，是生产使用的安全选项。而且不需要为用户授予 HDFS 访问权限即可使用 Thrift 客户端。

---
