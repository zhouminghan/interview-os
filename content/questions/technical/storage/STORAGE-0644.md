---
id: STORAGE-0644
type: technical
question: 如何不用 ALTER 命令重命名 Hive 表？
difficulty: 0
topic: []
source_type: knowledge
---

可以使用 `IMPORT`/`EXPORT` 语句在 Hive 中重命名表。首先通过 `EXPORT` 语句将原始表导出到某个位置：

```sql
hive> EXPORT TABLE tableName TO 'TEMP_LOCATION'
```

然后通过 `IMPORT` 语句创建新表：

```sql
hive> IMPORT TABLE newTableName FROM 'TEMP_LOCATION'
```

---
