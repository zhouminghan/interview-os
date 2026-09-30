---
id: STORAGE-0715
type: technical
question: 分区可以归档吗？
difficulty: 0
topic: []
source_type: knowledge
---

可以，分区可以归档。优点是减少了 NameNode 中存储的文件数量，并且可以使用 Hive 查询归档文件。缺点是会导致查询效率较低，且不会节省任何存储空间。

---
