---
id: STARROCKS-0217
type: technical
question: Doris 三种数据模型（Aggregate / Unique / Duplicate）的区别？⭐⭐⭐
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：Aggregate=写入即聚合 | Unique=按主键覆盖 | Duplicate=明细全保留 | 选型由数据特征决定

建表必须选模型，**这是 Doris 区别于 Hive 的核心设计**。

| 模型 | 行为 | 典型场景 | Key 列含义 |
|---|---|---|---|
| **Aggregate（聚合）** | 相同 Key 多条记录在写入时按 SUM/MAX/MIN/REPLACE 等聚合方式合并 | 报表预聚合：UV/PV、订单金额汇总 | 维度组合（不可改） |
| **Unique（主键）** | 相同 Key 的新记录覆盖旧记录（REPLACE_IF_NOT_NULL 语义） | 类 OLTP：用户/商品维度更新、Binlog 同步 | 业务主键 |
| **Duplicate（明细）** | 不做合并，原样保留 | 日志 / 明细分析 | 排序键（影响存储顺序、前缀索引） |

**Aggregate 示例**：
```sql
CREATE TABLE channel_stats (
    dt DATE,
    channel_id BIGINT,
    pv BIGINT SUM,                -- 写入时自动 SUM
    uv BITMAP BITMAP_UNION,       -- 写入时自动位图合并
    last_active_time DATETIME REPLACE
)
AGGREGATE KEY(dt, channel_id)
DISTRIBUTED BY HASH(channel_id) BUCKETS 10;
```

**Unique 模型的两种实现**：
- **Merge-on-Read**（旧默认）：写入快，查询时 Merge，查询慢
- **Merge-on-Write**（1.2+ 推荐）：写入时直接更新，查询无开销，更像真正的 PK 表

**怎么选**：
- 报表 / 高频聚合 → Aggregate
- 按主键 upsert（同步 MySQL 维表） → Unique（开 Merge-on-Write）
- 明细日志、不确定后续查询模式 → Duplicate

---
