---
id: LAKEHOUSE-0012
type: technical
question: 五、写入优化
difficulty: 0
topic: []
source_type: knowledge
---

```sql
-- 写入前排序，提升后续查询性能（利用 Iceberg 的 min/max 列统计信息进行 data skipping）
INSERT INTO db.table_name
SELECT * FROM source_table
ORDER BY event_time;

-- 或使用 Iceberg 表属性设置排序
ALTER TABLE db.table_name WRITE ORDERED BY event_time;
```
