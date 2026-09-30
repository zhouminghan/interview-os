---
id: STORAGE-0678
type: technical
question: 可以修改 Hive 表列的数据类型吗？
difficulty: 0
topic: []
source_type: knowledge
---

可以，使用 `REPLACE` 列选项：
```sql
ALTER TABLE table_name REPLACE COLUMNS (...)
```

---
