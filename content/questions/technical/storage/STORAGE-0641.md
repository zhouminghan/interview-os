---
id: STORAGE-0641
type: technical
question: 能否为一个数据文件创建多个 Hive 表？
difficulty: 0
topic: []
source_type: knowledge
---

可以，可以为一个数据文件创建多个表结构。Hive 会将结构保存在 Hive Metastore 中。数据将保留在同一文件中。基于结构，可以从同一数据中检索不同的结果。

---
