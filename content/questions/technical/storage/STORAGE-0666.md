---
id: STORAGE-0666
type: technical
question: 如何防止分区数据被删除或查询？
difficulty: 0
topic: []
source_type: knowledge
---

可以使用 `ALTER TABLE table_name ENABLE NO_DROP` 来防止表分区被删除。可以使用 `ALTER TABLE table_name ENABLE OFFLINE` 来防止表分区被查询。在离线模式下，仍然可以访问表分区的元数据。

---
