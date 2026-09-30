---
id: STORAGE-0661
type: technical
question: 归档 Hive 分区有什么优缺点？
difficulty: 0
topic: []
source_type: knowledge
---

可以在 Hive 中归档一些不常用的分区。归档的主要优点是减少存储在 NameNode 中的文件数量，甚至可以查询 Hive 中已归档的分区。归档的主要缺点是查询变得更慢，效率更低。

---
