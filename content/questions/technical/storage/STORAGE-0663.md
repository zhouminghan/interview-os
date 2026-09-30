---
id: STORAGE-0663
type: technical
question: 什么是倾斜表（Skewed table）？
difficulty: 0
topic: []
source_type: knowledge
---

倾斜表是 Hive 中的一种特殊表类型，其中某列中的某些值出现得更频繁，导致分布倾斜。在 Hive 中，如果在创建时将表指定为 `SKEWED`，那么倾斜值会被写入单独的文件，其余值会进入另一个文件。

例如：
```sql
CREATE TABLE tableName (column1 STRING, column2 STRING) 
SKEWED BY (column1) ON ('value1')
```

在查询期间，倾斜表在 Hive 中可以获得更好的性能。

---
