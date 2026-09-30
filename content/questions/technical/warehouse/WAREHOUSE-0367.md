---
id: WAREHOUSE-0367
type: technical
question: （追问）用户一天登录两次怎么办？连续登录怎么算？
difficulty: 0
topic: []
source_type: knowledge
---

**参考回答**：
> 先确认数据模型：若是登录明细表、一天可登多次，统计前先按用户+日期去重（连续登录统计的是"天"而非登录次数），再算连续区间；若题目说明每天仅一条则省略去重。真正开发先确认粒度，不直接套模板。

**💡 点评**：这题考"数据建模意识"——很多候选人直接写 SQL 不确认粒度。

**📌 造数据 · 表结构**
- 表名：`user_login_log`（登录明细，一天可多次）
- 字段：`user_id` string、`login_time` timestamp
- 样例数据：
  | user_id | login_time |
  |---------|------------|
  | U1 | 2026-01-01 10:00:00 |
  | U1 | 2026-01-01 22:00:00 |   ← 同一天第二次
  | U1 | 2026-01-02 09:00:00 |
  | U1 | 2026-01-03 09:00:00 |
  | U1 | 2026-01-05 09:00:00 |   ← 01-04 中断
  若不先去重，U1 在 01-01 会有两行，`row_number` 差分会把 01-01 拆成两个不同 segment → 误判。

**🧠 思路扩写（拓视野）**
- **这道题的本质不是 SQL 技巧，是"数据粒度确认"**：连续登录统计的是"天"这个粒度，而明细粒度是"次"。维度不同必须先降粒度（去重到天）再算。
- **工程习惯**：所有"连续 N 天"类需求，第一步固定是 `SELECT user_id, DATE(login_time) FROM log GROUP BY 1,2` 产出天级明细，再套 Q49 的逻辑。把它养成肌肉记忆，能避开 80% 的坑。
- **当面确认的表述**："这张表是登录明细还是日活表？如果是明细我先生命到天级再算连续区间"——一句话体现你不会盲套模板。

**💻 最终 SQL（在 Q49 之前加一层去重）**
```sql
WITH day_level AS (                -- ① 先按 用户+天 去重，降粒度
    SELECT user_id, DATE(login_time) AS active_date
    FROM user_login_log
    GROUP BY user_id, DATE(login_time)
),
ranked AS (
    SELECT user_id, active_date,
           ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY active_date) AS rn
    FROM day_level
),
segment AS (
    SELECT user_id, active_date,
           DATE_SUB(active_date, rn) AS grp_key
    FROM ranked
),
span AS (
    SELECT user_id, grp_key, COUNT(*) AS continuous_days,
           MIN(active_date) AS start_date, MAX(active_date) AS end_date
    FROM segment
    GROUP BY user_id, grp_key
)
SELECT user_id, continuous_days, start_date, end_date
FROM span
WHERE continuous_days >= 4;
```
> 注：三道题的 `date_sub(active_date, rn)` 在 Hive/Spark 中 `rn` 为 int 可直接减；在部分引擎需写成 `date_sub(active_date, CAST(rn AS INT))`。

---

## 七、职业思考与个人规划
