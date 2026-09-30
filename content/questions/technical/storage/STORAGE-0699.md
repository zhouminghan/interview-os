---
id: STORAGE-0699
type: technical
question: 在 Hive 表中指定位置前插入新列的查询？
difficulty: 0
topic: []
source_type: knowledge
---

```sql
ALTER TABLE table_name CHANGE COLUMN new_col INT BEFORE x_col
```

---
