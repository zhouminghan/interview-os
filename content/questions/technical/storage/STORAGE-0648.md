---
id: STORAGE-0648
type: technical
question: Hive DROP 语句中 PURGE 的作用？
difficulty: 0
topic: []
source_type: knowledge
---

在确定要删除表的数据时，使用 `PURGE` 选项。使用 `DROP TABLE tableName PURGE` 语句，表数据不会进入垃圾文件夹。因此，如果意外执行了 `DROP` 语句，也无法检索数据。

---
