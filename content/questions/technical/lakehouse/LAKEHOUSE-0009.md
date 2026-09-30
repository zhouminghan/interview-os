---
id: LAKEHOUSE-0009
type: technical
question: 二、分区裁剪（Partition Pruning）— 关键注意事项
difficulty: 0
topic: []
source_type: knowledge
---

> ⚠️ **核心原则：查询的 `WHERE` 条件必须作用于分区的源列，且使用分区转换能识别的表达式，否则分区裁剪会失效，退化为全表扫描。**

### ✅ 正确写法

```sql
-- 表按 day(event_time) 分区
-- 直接过滤源列 event_time，Iceberg 可推导出对应的 day 分区值
SELECT * FROM logs
WHERE event_time >= '2025-03-01' AND event_time < '2025-03-24';
```

### ❌ 错误写法（可能导致全表扫描）

```sql
-- 1. 对源列做了函数转换，Iceberg 无法识别
SELECT * FROM logs
WHERE date_format(event_time, 'yyyy-MM-dd') = '2025-03-24';

-- 2. 类型不匹配：分区源列是 TIMESTAMP，但 WHERE 用了 STRING 直接比较
--    某些引擎不会做隐式类型转换，导致裁剪失败
SELECT * FROM logs
WHERE CAST(event_time AS STRING) = '2025-03-24 00:00:00';

-- 3. 使用了 Iceberg 不认识的表达式
SELECT * FROM logs
WHERE unix_timestamp(event_time) > 1711238400;
```

### 关键结论

| 场景 | 是否裁剪 | 说明 |
|------|---------|------|
| `WHERE event_time >= '2025-03-01'` | ✅ 是 | 直接过滤源列，Iceberg 可推导分区值 |
| `WHERE date_format(event_time, ...) = 'xxx'` | ❌ 否 | 源列被函数包裹，无法推导 |
| `WHERE event_time = CAST('2025-03-24' AS DATE)` | ✅ 是 | 类型显式匹配 |
| `WHERE CAST(event_time AS STRING) = 'xxx'` | ❌ 否 | 对源列做了类型转换 |
| `WHERE event_date = '20250324'`（STRING 分区列） | ✅ 是 | identity 分区，类型一致 |

---
