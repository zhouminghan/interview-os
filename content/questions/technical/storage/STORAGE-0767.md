---
id: STORAGE-0767
type: technical
question: 分区相关操作
difficulty: 0
topic: []
source_type: knowledge
---

**检查分区是否存在**：
```sql
SHOW PARTITIONS tableName PARTITION (partition_col='value')
```

**防止分区被删除/查询**：
```sql
ALTER TABLE tableName PARTITION (col='val') ENABLE OFFLINE
-- 恢复
ALTER TABLE tableName PARTITION (col='val') ENABLE NO_DROP
```

**分区指向新目录后**：数据路径会更新，指向新目录。旧目录的数据不会被自动移走。

**分区归档**：可节省 NameNode 内存，减少小文件。缺点是不可直接更新归档分区内容。
