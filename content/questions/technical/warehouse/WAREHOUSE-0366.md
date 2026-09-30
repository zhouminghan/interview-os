---
id: WAREHOUSE-0366
type: technical
question: 统计连续活跃超过四天的用户及活跃天数（用户活跃明细表）。
difficulty: 0
topic: []
source_type: knowledge
---

**参考回答（思路）**：
> 按用户、日期排序；用 `row_number()` 生成连续序号；计算 `日期 - 序号` 得差值分组键（连续日期差值恒定）；按该差值分组统计天数；筛选 ≥4 天即得连续活跃超四天用户及活跃天数。

**💡 点评**：经典连续区间题。主动解释"连续日期每天+1、序号也+1，差值不变，从而划到同组"会很加分。

**📌 造数据 · 表结构**
- 表名：`user_active_log`（用户活跃明细，已按天去重）
- 字段：`user_id` string、`active_date` date
- 样例数据：
  | user_id | active_date |
  |---------|-------------|
  | U1 | 2026-01-01 |
  | U1 | 2026-01-02 |
  | U1 | 2026-01-03 |
  | U1 | 2026-01-04 |
  | U1 | 2026-01-07 |   ← 中断，前 4 天为一段
  | U2 | 2026-01-01 |
  | U2 | 2026-01-02 |
  | U2 | 2026-01-04 |
  | U2 | 2026-01-05 |
  | U2 | 2026-01-06 |
  | U2 | 2026-01-08 |
  结果：U1 有 4 天连续段（01-01~01-04）；U2 最长连续段仅 3 天（01-04~01-06）→ 都不满足"连续活跃 4 天以上"（≥5 天）。

**🧠 思路扩写（拓视野）**
- **`row_number` 差分法原理**：连续日期每天 +1，`row_number` 也每天 +1，二者之差恒定 → 同一差值 = 同一段连续区间。这是把"连续区间"问题变成"分组聚合"问题的标准转换。
- **题目要求边界**："超过四天"字面是 >4（满 5 天）；面试中常被宽松理解为"≥4 天"。SQL 里 `>= 4` 还是 `> 4` 务必和面试官确认，并主动说出这个歧义——这本身就是一个加分点。
- **另一种思路 `LAG` 断点法**：用 `LAG(active_date)` 算相邻间隔，`datediff - 1 = 1` 即连续，否则断开。再用条件累加打 segment 标签。比 `row_number` 法更直观，且能天然容忍"同天多条"的脏数据。
- **为什么不直接 `COUNT(*) GROUP BY user_id`**：那是总活跃天数，不是"连续"天数，核心在于"断点"如何识别。

**💻 最终 SQL**
```sql
WITH ranked AS (
    SELECT user_id, active_date,
           ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY active_date) AS rn
    FROM user_active_log
),
segment AS (
    SELECT user_id, active_date,
           -- 连续日期 - 行号 恒定 => 同一段
           DATE_SUB(active_date, rn) AS grp_key
    FROM ranked
),
span AS (
    SELECT user_id, grp_key,
           COUNT(*)                       AS continuous_days,
           MIN(active_date)              AS start_date,
           MAX(active_date)              AS end_date
    FROM segment
    GROUP BY user_id, grp_key
)
SELECT user_id, continuous_days, start_date, end_date
FROM span
WHERE continuous_days >= 4;   -- 严格"超过4天"则改为 > 4
```

---
