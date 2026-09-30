---
id: STORAGE-0694
type: technical
question: 如何检查特定分区是否存在？
difficulty: 0
topic: []
source_type: knowledge
---

可以使用以下查询：
```sql
SHOW PARTITIONS table_name PARTITION(partitioned_column='partition_value')
```

---
