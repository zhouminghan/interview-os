---
id: STORAGE-0638
type: technical
question: Hive 中 USE 命令的作用是什么？
difficulty: 0
topic: []
source_type: knowledge
---

在 Hive 中，必须在运行 Hive 查询之前调用 USE 命令。USE 命令设置当前数据库，查询语句将在该数据库上执行。可以调用 `USE default` 将数据库设置为默认数据库，或者调用 `USE database_name` 设置要运行查询的数据库。

---
