---
id: STARROCKS-0220
type: technical
question: 怎么看 Doris 的执行计划？怎么定位慢查询？⭐⭐⭐
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：EXPLAIN | EXPLAIN VERBOSE | Query Profile | 关注 Scan/Join/Agg | Stats 是否过期
> **来源**：字节-AI Agent数据开发一面-20260412 Q6

方法论和 Spark / Hive 通用，差异只在工具。

### 1. EXPLAIN（静态计划）
```sql
EXPLAIN SELECT ... FROM ...;
```
**从底向上读**：
- **OlapScanNode**：扫了哪张表 / rollup（`rollup=xxx`）、分区（`selected partitions`）、是否走前缀索引
- **HashJoinNode**：JOIN 类型（`BROADCAST` / `PARTITIONED` / `COLOCATE` / `BUCKET_SHUFFLE`）、JOIN 条件
- **AggregationNode**：是否两阶段（Streaming + Final）
- **ExchangeNode**：Shuffle 节点

**关注点**：走 rollup 还是 Base？JOIN 是 BROADCAST（小表广播无 Shuffle）还是 PARTITIONED（大表 Shuffle）？分区/列裁剪是否生效？

### 2. EXPLAIN VERBOSE / GRAPH
更详细的物理计划（Tablet 数、行数预估等）。

### 3. Query Profile（动态执行剖析）⭐核心
`set enable_profile=true;` 后跑 SQL，去 FE Web UI 的 `/QueryProfile` 看每个算子的：
- **实际耗时**（CPU / 等待）
- **实际处理行数**（vs 优化器估计）
- **数据量**（扫了多少 GB、传了多少 GB）
- **内存使用**

→ 找耗时最长 / 数据量最大的算子，针对性优化。

### 4. 数据量预估 vs 实际偏差
EXPLAIN 里 `cardinality` 和 Profile 实际行数偏差大 → **Stats 过期**。
```sql
ANALYZE TABLE table_name;
SHOW TABLE STATS table_name;
```
CBO 依赖 Stats，Stats 过期会导致 JOIN 顺序、JOIN 类型选错。

### 5. 实战排查流程
1. 慢 SQL → `EXPLAIN` 看计划
2. 没分区裁剪 → 加分区条件
3. JOIN 走错策略 → 小表 hint `[broadcast]` 或调 `auto_broadcast_join_threshold`
4. 数据倾斜 → 看 Profile 各 Instance 耗时差异
5. Stats 过期 → `ANALYZE`
6. 频繁慢查询 → 建 rollup / 物化视图 / 调分桶字段

---
