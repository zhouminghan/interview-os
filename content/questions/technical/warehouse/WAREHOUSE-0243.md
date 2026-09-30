---
id: WAREHOUSE-0243
type: technical
question: 拉链表和累积快照事实表的构造原理与 SQL 实现？⭐⭐⭐
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：科大讯飞-大数据工程师实习-20260514 Q3、字节跳动-大数据开发(交易与广告)-20260415

这两个是数仓**事实表/维度表的两种特殊形态**，**字节、阿里、讯飞这些公司都爱问**——既考概念也考 SQL 写法。要分清两者的**应用场景完全不同**：

### 一、累积快照事实表（Accumulating Snapshot Fact Table）

**定位**：记录**一个业务过程的多个关键时间节点状态**，每条记录对应一个业务实体（比如一笔订单）的完整生命周期。

**典型场景**：订单全生命周期——下单、支付、发货、签收。

**表结构示例**：

```sql
CREATE TABLE dwd_order_accum_snapshot (
    order_id        STRING COMMENT '订单ID（主键）',
    user_id         STRING COMMENT '用户ID',
    create_dt       STRING COMMENT '下单日期',
    pay_dt          STRING COMMENT '支付日期',
    deliver_dt      STRING COMMENT '发货日期',
    receive_dt      STRING COMMENT '签收日期',
    refund_dt       STRING COMMENT '退款日期',
    create_to_pay_hours    DOUBLE COMMENT '下单到支付时长（小时）',
    pay_to_deliver_hours   DOUBLE COMMENT '支付到发货时长（小时）',
    deliver_to_receive_hours DOUBLE COMMENT '发货到签收时长（小时）',
    order_status    STRING COMMENT '当前订单状态',
    amount          DECIMAL(18,2)
) PARTITIONED BY (dt STRING);
```

**核心特征**：
- **多个时间字段**——每个生命周期节点一个时间字段，最初创建时所有节点字段为空
- **会被反复 UPDATE**——每经过一个节点就更新一次（这是它和事务事实表最大的区别）
- **可以算转化漏斗**——`COUNT(pay_dt) / COUNT(create_dt)` 直接得到下单→支付转化率

**SQL 实现思路**（每天合并增量更新）：

```sql
-- 每天用增量更新方式重建 dt 分区
INSERT OVERWRITE TABLE dwd_order_accum_snapshot PARTITION (dt='2026-05-14')
SELECT
    COALESCE(new.order_id, old.order_id) AS order_id,
    COALESCE(new.user_id, old.user_id) AS user_id,
    COALESCE(old.create_dt, new.create_dt) AS create_dt,         -- 旧值优先（不变）
    COALESCE(old.pay_dt, new.pay_dt) AS pay_dt,                  -- 旧值优先
    COALESCE(old.deliver_dt, new.deliver_dt) AS deliver_dt,
    COALESCE(old.receive_dt, new.receive_dt) AS receive_dt,
    COALESCE(new.refund_dt, old.refund_dt) AS refund_dt,
    -- 时长字段在每个节点完成时计算
    DATEDIFF(COALESCE(old.pay_dt, new.pay_dt), COALESCE(old.create_dt, new.create_dt)) * 24 AS create_to_pay_hours,
    new.order_status AS order_status,
    new.amount AS amount
FROM (SELECT * FROM dwd_order_accum_snapshot WHERE dt = DATE_SUB('2026-05-14', 1)) old
FULL OUTER JOIN (SELECT * FROM ods_order_change WHERE dt = '2026-05-14') new
    ON old.order_id = new.order_id;
```

**项目实战**——QQ 频道 MVP 实时数仓有个**累积快照变种**：DWS 层做"分钟增量 + 分钟全量累计表"，ADS 基于分钟全量累计表产出当天累积登录 UV，本质是按"分钟时间粒度"做的累积快照。

### 二、拉链表（Zipper Table / SCD Type 2）

**定位**：记录**一个维度实体的所有历史变化版本**，能查任意历史时点的维度状态。

**典型场景**：用户信息（昵称、等级、地域会变）、商品价格、组织架构。

**表结构示例**：

```sql
CREATE TABLE dim_user_zipper (
    user_id       STRING COMMENT '用户ID',
    nickname      STRING COMMENT '昵称',
    level         INT COMMENT '等级',
    region        STRING COMMENT '地域',
    start_dt      STRING COMMENT '生效日期',
    end_dt        STRING COMMENT '失效日期，9999-12-31代表当前有效',
    is_current    INT COMMENT '是否当前版本：1=是 0=否'
) PARTITIONED BY (dt STRING);
-- 注意：拉链表通常存全量历史，dt 用最新分区即可
```

**核心特征**：
- **start_dt + end_dt 双字段定义生效区间**
- **end_dt = '9999-12-31'** 代表当前有效记录
- **变更时**：把旧记录 end_dt 改成今天，新增一条新记录 start_dt 为今天

**SQL 实现**（每天增量维护拉链表）：

```sql
-- 假设变更日表 ods_user_change 包含今日有变更的用户最新信息
INSERT OVERWRITE TABLE dim_user_zipper PARTITION (dt='2026-05-14')
SELECT user_id, nickname, level, region, start_dt, end_dt, is_current FROM (
    -- 1. 历史未过期记录中，被今日变更命中的，end_dt 改为今天，is_current=0
    SELECT
        h.user_id, h.nickname, h.level, h.region, h.start_dt,
        CASE WHEN c.user_id IS NOT NULL AND h.end_dt = '9999-12-31'
             THEN '2026-05-13'
             ELSE h.end_dt END AS end_dt,
        CASE WHEN c.user_id IS NOT NULL AND h.end_dt = '9999-12-31'
             THEN 0 ELSE h.is_current END AS is_current
    FROM (SELECT * FROM dim_user_zipper WHERE dt = DATE_SUB('2026-05-14', 1)) h
    LEFT JOIN (SELECT DISTINCT user_id FROM ods_user_change WHERE dt = '2026-05-14') c
        ON h.user_id = c.user_id

    UNION ALL

    -- 2. 今日变更记录追加为新版本
    SELECT user_id, nickname, level, region,
           '2026-05-14' AS start_dt,
           '9999-12-31' AS end_dt,
           1 AS is_current
    FROM ods_user_change WHERE dt = '2026-05-14'
) t;
```

**典型查询**：
```sql
-- 1. 查任意历史时点的维度状态（比如 2025-10-01 时用户的等级）
SELECT * FROM dim_user_zipper
WHERE start_dt <= '2025-10-01' AND end_dt > '2025-10-01';

-- 2. 查当前有效维度（最常用）
SELECT * FROM dim_user_zipper WHERE is_current = 1;
-- 等价于
SELECT * FROM dim_user_zipper WHERE end_dt = '9999-12-31';
```

### 三、拉链表 vs 全量切片 vs 累积快照——选型决策

| 方案 | 存储 | 实现 | 历史回溯 | 适用场景 |
|---|---|---|---|---|
| **每天全量切片** | 大（每天一份完整快照） | 简单 | 取对应日期分区即可 | 大数据场景、维度查询频繁、存储不敏感 |
| **拉链表（SCD2）** | 小（只存变更） | 较复杂（全外连接合并） | start_dt/end_dt 区间查询 | 变更稀疏、需任意时点回溯、存储敏感 |
| **累积快照** | 中等（每行一个实体） | 中等（FULL OUTER JOIN 合并增量） | 字段层面有节点时间 | 业务过程明确、需算各节点转化漏斗 |

**项目实战选型**——QQ 频道频道切片、成员切片走的是**每天全量切片**而不是标准拉链表。原因：① 我们是大数据场景，存储相对便宜；② 业务侧 90% 查询是"取某天的快照"而非"看完整变更历史"，全量切片更贴合查询习惯；③ 实现简单不易出 bug。

**什么时候我会改用拉链表**——维度变更频次低、需要支持任意历史时点回溯（金融订单维度场景），且存储压力大时。

> 💡 **专家补充**：
> - **\"每天全量切片\"是大数据场景下对 SCD Type 2 的简化实现**——本质上等价于拉链表，但用空间换实现简单度。在 Hive/Spark 这种存储便宜的环境下，**生产中 80% 都走全量切片**，标准拉链表反而是少数场景。说全量切片不会掉价
> - **累积快照表的最大价值是\"算转化漏斗一行 SQL 搞定\"**——`COUNT(pay_dt) / COUNT(create_dt)` 立刻得到下单→支付转化率。这是为什么订单、流量漏斗类场景都爱用累积快照
> - **拉链表的核心难点是\"开链 + 闭链\"逻辑**——很多人写出来的拉链表在边界场景（同一天多次变更、删除后重新插入）会丢数据。生产环境一定要做**全量历史比对的数据质量校验**
> - **湖仓时代拉链表正在被 Iceberg/Hudi 的 Time Travel 替代**——直接 `AS OF '2025-10-01'` 查历史版本，不需要手动维护 start_dt/end_dt。但当前还是过渡期，传统数仓里拉链表是必备技能
> - **累积快照 vs 周期快照 vs 事务事实表**——这是 Kimball 的"事实表三种类型"。事务（一行一事件，不变）、周期（每天一行，定期采样）、累积（一行一实体，反复更新到生命周期结束）。**面试讲清三者区别立刻拉开 P5 和 P7 的差距**



---
