---
id: STORAGE-0647
type: technical
question: Hive 语句中 IF EXISTS 子句的作用？
difficulty: 0
topic: []
source_type: knowledge
---

在 `DROP TABLE` 语句中使用 `IF EXISTS` 子句。当删除表时，可能存在表不存在的情况。在这种情况下，`DROP` 语句会报错。如果不确定表在 Hive 中是否存在，使用 `DROP TABLE IF EXISTS tableName` 语句来删除表。如果表不存在，此语句不会报错。

---
