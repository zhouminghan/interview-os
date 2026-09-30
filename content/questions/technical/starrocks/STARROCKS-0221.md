---
id: STARROCKS-0221
type: technical
question: Doris 上能做拉链表吗？怎么做？和 THive 对比？⭐⭐⭐
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：THive=INSERT OVERWRITE 重写 | Doris=Unique+Merge-on-Write | start_dt/end_dt 设计 | 注意大批量 UPDATE 性能
> **来源**：字节-AI Agent数据开发一面-20260412 Q7
> **诚实策略**：明确"Doris 上没做过，THive 上做过，迁到 Doris 应该这么搞"

### 拉链表本质（SCD Type 2）
缓变维（用户/频道/商品属性慢慢变化），保留每个版本的有效区间：
```
| user_id | name      | start_dt   | end_dt     |
| 1001    | "小明"    | 2025-01-01 | 2025-06-30 |   -- 老
| 1001    | "小明哥"  | 2025-07-01 | 9999-12-31 |   -- 当前有效
```

### THive 上的实现（我做过的）
T+1 调度：
1. 取今日全量快照 `today_snapshot`
2. 取拉链表当前有效记录 `current = WHERE end_dt = '9999-12-31'`
3. 对比变更：
   - 变更行：`current` 的 `end_dt` 改成昨天，`today` 以今天作为 `start_dt` 插入
   - 新增行：`today` 有但 `current` 没有 → 插入，`start_dt=今天`，`end_dt='9999-12-31'`
   - 删除行：`current` 有但 `today` 没有 → `end_dt` 改成昨天

实现方式：`INSERT OVERWRITE` 整表重写"当日变更影响的部分"，历史已封链记录原样保留。

### Doris 上的实现（合理迁移设想）

**核心选择：Unique 模型 + Merge-on-Write**。

**方案 A：业务 Key + start_dt 组合主键**
```sql
CREATE TABLE dim_user_chain (
    user_id BIGINT,
    start_dt DATE,
    end_dt DATE,
    name VARCHAR(64)
    -- ...
)
UNIQUE KEY(user_id, start_dt)
DISTRIBUTED BY HASH(user_id) BUCKETS 32
PROPERTIES("enable_unique_key_merge_on_write" = "true");
```
写入流程：
- 新增 / 变更新版本：`INSERT INTO`，`start_dt=今天`，`end_dt='9999-12-31'`
- 关链老版本（改 `end_dt`）：`UPDATE` 语句（1.2+ 支持，但注意性能），或 Stream Load + REPLACE 整体覆盖封链记录

**方案 B：Aggregate 模型 + REPLACE_IF_NOT_NULL**
把 `end_dt` 设成 `REPLACE_IF_NOT_NULL`，关链时 INSERT 一条 `(user_id, start_dt, end_dt=昨天)`，REPLACE 自动覆盖。

### Doris vs THive 对比

| 维度 | THive | Doris |
|---|---|---|
| 写入方式 | INSERT OVERWRITE 重写分区 | INSERT / UPDATE / Stream Load |
| 查询性能 | 慢（要扫完整文件） | 快（MPP + Merge-on-Write） |
| 大批量历史 UPDATE | 整表重写，开销可预期 | 不擅长，建议 Routine Load + REPLACE |
| 即写即查 | 否（等任务跑完） | 是（写入即可见） |
| 实时拉链 | 难（T+1） | 容易（Routine Load 同步 Binlog） |

### 关键坑点
- Doris **不擅长大批量 UPDATE**，几百万行 UPDATE 比 THive 慢得多。生产做拉链建议走 Stream Load / Routine Load 配合 REPLACE 语义
- Merge-on-Write 写入更慢但查询更快，按读多写少特点选
- 历史封链冷数据可单独存到 Hive，Doris 只放近期热数据，控存储成本

> 💡 **诚实表态收尾**：「实话实说，Doris 上我没做过拉链表。这套方案是基于我对 Doris 三种模型和 Merge-on-Write 的理解推出来的，给我时间补一下我可以实操一遍。但这次面试我不能假装自己做过。」

---
