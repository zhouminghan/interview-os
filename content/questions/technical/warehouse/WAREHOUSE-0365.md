---
id: WAREHOUSE-0365
type: technical
question: 统计每个直播间当场直播的峰值在线人数（进出明细表）。
difficulty: 0
topic: []
source_type: knowledge
---

**参考回答（思路）**：
> 不直统在线人数，用事件流+扫描线：进直播间记 `+1`，退出记 `-1`，两类数据 Union；按直播间、时间排序；用窗口函数（如 `sum() over (partition by 直播间 order by 时间)`）算累计在线，累计最大值即峰值。本质是扫描线算法，复杂度主要来自排序。

**💡 点评**：大厂标准解法，直接 Join 统计性能差。

**📌 造数据 · 表结构**
- 表名：`live_room_event`（直播间进出明细）
- 字段：
  | 字段 | 类型 | 说明 |
  |------|------|------|
  | room_id | string | 直播间 ID |
  | user_id | string | 用户 ID |
  | event_type | string | `enter`（进入）/ `exit`（退出） |
  | event_time | timestamp | 事件时间 |

- 样例数据（直播间 `R001`）：
  | room_id | user_id | event_type | event_time |
  |---------|---------|------------|------------|
  | R001 | U1 | enter | 2026-01-01 10:00:00 |
  | R001 | U2 | enter | 2026-01-01 10:01:00 |
  | R001 | U1 | exit  | 2026-01-01 10:02:00 |
  | R001 | U3 | enter | 2026-01-01 10:03:00 |
  | R001 | U2 | exit  | 2026-01-01 10:05:00 |
  | R001 | U3 | exit  | 2026-01-01 10:06:00 |

  按时间累加：`10:00→1, 10:01→2, 10:02→1, 10:03→2, 10:05→1, 10:06→0`，峰值 = **2**。

**🧠 思路扩写（拓视野）**
- **为什么不能 self-join**：朴素做法"对每个进入事件找同时段还在场的人"是 O(n²) 双重循环，且边界（同一时刻进出）极难处理。
- **核心思想——扫描线 / 差分（差分数组 + 前缀和）**：把"在某个时刻在场的人数"转化为"到该时刻为止的净进出累计"。进 `+1`、出 `-1`，前缀和即此刻并发数。这是「会议室最多同时开会数」「天际线」等题的同一套路。
- **时间复杂度**：主要来自排序 O(n log n)，远优于暴力自连接。
- **两个必答的边界坑（面试官最爱追问）**：
  1. **同时间戳进出**：用户 A 退出和用户 B 进入发生在同一秒。若排序把 enter 排在前，会瞬间多算一人。正确做法——同时间时 **exit 排在 enter 之前**（先减后加）。
  2. **重复进入/漏退出**：真实数据常有"进了没退"，需先按 (room_id, user_id) 做进出配对清洗，否则累计值会漂移。

**💻 最终 SQL**
```sql
WITH events AS (
    SELECT room_id, event_time, event_type,
           CASE WHEN event_type = 'enter' THEN 1 ELSE -1 END AS delta
    FROM live_room_event
),
running AS (
    SELECT room_id,
           -- 同时间：exit(0) 先于 enter(1)，避免瞬间虚高
           SUM(delta) OVER (
               PARTITION BY room_id
               ORDER BY event_time,
                        CASE WHEN event_type = 'exit' THEN 0 ELSE 1 END
               ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
           ) AS concurrent
    FROM events
)
SELECT room_id, MAX(concurrent) AS peak_online
FROM running
GROUP BY room_id;
```

---
