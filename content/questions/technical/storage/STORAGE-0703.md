---
id: STORAGE-0703
type: technical
question: 建表时省略 OVERWRITE 会对文件有何影响？
difficulty: 0
topic: []
source_type: knowledge
---

新的传入文件只是添加到目标目录，现有文件被直接覆盖。名称与任何传入文件不匹配的其他文件将继续存在。

如果添加 `OVERWRITE` 子句，那么在写入新数据之前，目录中的所有现有数据将被删除。

---
