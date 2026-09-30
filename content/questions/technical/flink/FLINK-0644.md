---
id: FLINK-0644
type: technical
question: Iceberg 的二级分区你是怎么用的？分区字段选了什么？
difficulty: 0
topic: []
source_type: knowledge
---

分区策略：**日期（天）+ 事件类型**

```sql
CREATE TABLE dwd_channel_action_di (
    uin         STRING,
    channel_id  STRING,
    event_type  STRING,
    event_time  TIMESTAMP,
    ...
) USING iceberg
PARTITIONED BY (days(event_time), event_type);
```

**为什么不用 channel_id 做分区**：
- 频道数量 10 万+，作为分区字段会导致分区数爆炸（分区过多本身就是小文件问题）
- event_type 只有 ~20 种，分区数可控
- 查询模式通常是"某天某类事件"的过滤，这个分区策略和查询模式对齐

**分区裁剪效果**：查询"昨天的点赞数据"时，只扫描 `imp_date=2024-12-01/event_type=like` 这一个分区，避免全表扫描。

---
