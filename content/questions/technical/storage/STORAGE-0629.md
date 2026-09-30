---
id: STORAGE-0629
type: technical
question: 什么是 Hive 中的 Metastore？
difficulty: 0
topic: []
source_type: knowledge
---

Hive 表定义、映射和其他元数据都存储在 Metastore 中。这可以存储在与 JPOX 兼容的 RDBMS 中。默认情况下，同一时间只有一个用户可以查看 Metastore。Metastore 有两部分：

- **Metastore 服务**：此服务在 Hive 与用户/处理之间提供接口。
- **Metastore 数据库**：此数据库存储表定义、数据映射等。

在默认配置中，Hive Metastore 与 Hive Driver 存储在同一 JVM 中。这也称为嵌入式 Metastore，适合开发和测试环境。也可以使用外部数据库（如 MySQL）来存储元数据，此配置称为本地 Metastore。

---
