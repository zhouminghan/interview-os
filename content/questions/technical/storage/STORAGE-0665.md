---
id: STORAGE-0665
type: technical
question: 什么是 Hive 中的管理表（Managed table）？
difficulty: 0
topic: []
source_type: knowledge
---

管理表是文件、元数据和统计信息等都由 Hive 内部进程管理的表。Hive 默认创建管理表。当删除管理表或分区时，与表关联的所有元数据和数据也会被删除。当我们希望 Hive 管理表的生命周期时，使用管理表。即使是临时表，也在 Hive 中使用管理表。

运行 `DESCRIBE FORMATTED tableName` 语句时，它会显示表是 `MANAGED_TABLE` 还是 `EXTERNAL_TABLE`。

---
