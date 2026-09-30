---
id: LAKEHOUSE-0011
type: technical
question: 四、小文件治理
difficulty: 0
topic: []
source_type: knowledge
---

```sql
-- 合并小文件（Spark Iceberg 内置 procedure）
CALL catalog.system.rewrite_data_files(table => 'db.table_name');

-- 指定目标文件大小（默认 512MB）
CALL catalog.system.rewrite_data_files(
  table => 'db.table_name',
  options => map('target-file-size-bytes', '134217728')  -- 128MB
);

-- 清理过期快照（释放存储）
CALL catalog.system.expire_snapshots(table => 'db.table_name', older_than => TIMESTAMP '2025-03-01 00:00:00');

-- 清理孤立文件
CALL catalog.system.remove_orphan_files(table => 'db.table_name');
```

---
