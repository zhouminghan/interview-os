---
id: STORAGE-0750
type: technical
question: 什么是 Hive 中的 Metastore？
difficulty: 0
topic: []
source_type: knowledge
---

Metastore 存储 Hive 表定义、列类型、映射等元数据。存储在 RDBMS（如 MySQL）中。包括两部分：
- **Metastore 服务**：Hive 与用户之间的接口
- **Metastore 数据库**：实际存储元数据的地方
