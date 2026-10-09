---
id: STORAGE-0029
type: technical
question: Hive中的元数据存储在哪里？如何管理？请详细说明元数据的存储方式、管理方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

元数据存在 Metastore，通常是关系库。

# 参考回答

Hive 元数据存在 Metastore，底层常用 MySQL 存表结构、分区、位置。管理上要备份、做权限控制、保持和实际数据一致。生产 Metastore 单独部署。

# 追问

- 元数据存哪些信息？
