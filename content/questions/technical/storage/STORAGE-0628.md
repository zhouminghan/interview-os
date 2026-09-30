---
id: STORAGE-0628
type: technical
question: 如何修改 Hive 列的数据类型？
difficulty: 0
topic: []
source_type: knowledge
---

可以使用 ALTER 语句来修改 Hive 中列的数据类型。命令如下：

```sql
ALTER TABLE tableName REPLACE COLUMNS (columnName dataType)
```

---
