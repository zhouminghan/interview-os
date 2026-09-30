---
id: STORAGE-0667
type: technical
question: ALTER 语句中 TOUCH 的作用？
difficulty: 0
topic: []
source_type: knowledge
---

在 Hive 中，`TOUCH` 子句在 ALTER 语句中用于读取元数据并将其写回。此操作将修改 Hive 中分区的最后访问时间。通过 `TOUCH` 语句，还可以对表分区执行 POST 和 PRE 钩子。如果表或分区尚不存在，不能使用此语句创建。

---
