---
id: FLINK-0536
type: technical
question: 什么是 Flink SQL 客户端，如何启动？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Flink SQL 客户端提供了一个命令行界面来运行 SQL 操作，如创建表、删除表、创建视图、删除视图以及其他 SQL 命令。

可以使用以下命令启动 SQL 客户端：
```bash
./bin/start-cluster.sh
./bin/sql-client.sh embedded
```

---
