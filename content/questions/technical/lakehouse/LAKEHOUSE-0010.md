---
id: LAKEHOUSE-0010
type: technical
question: 三、分区策略选择
difficulty: 0
topic: []
source_type: knowledge
---

| 场景 | 推荐分区方式 | 说明 |
|------|------------|------|
| 时序数据，按天查询 | `day(ts)` | 最常见的分区方式 |
| 时序数据，查询粒度到小时 | `hour(ts)` | 数据量极大时使用 |
| 用户维度等值查询 | `bucket(N, user_id)` | 避免高基数列产生过多分区 |
| 低基数维度 | `identity(region)` | 类似 Hive 分区 |
| 分区演进 | 使用 `ALTER TABLE ... ADD PARTITION FIELD` | Iceberg 支持无损分区演进，无需重写数据 |

---
