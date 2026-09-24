---
id: ALGORITHM-0002
type: technical
question: 直播间最多人数对应的时刻（变式）
topic: [algorithm, sweep-line]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-08-27-alibaba-data-dev
    company: 阿里巴巴
    position: 数据开发（一面）
    date: 2026-08-27
---

# 一句话

把进入记 +1、离开记 -1，按时间排序后扫描累加，维护最大在线人数和对应时刻。

# 思路

- 事件化：进入 -> (time, +1)，离开 -> (time, -1)
- 排序：按时间排序，同时间先离开后进入（避免边界重复计数）
- 扫描：累加当前在线数，更新最大值和对应时刻
- 变式：可求最大人数持续时段、峰值时刻、加窗口等

# 代码

```python
def max_online(events):
    # events: [(enter, leave), ...]
    timeline = []
    for enter, leave in events:
        timeline.append((enter, 1))
        timeline.append((leave, -1))
    timeline.sort(key=lambda x: (x[0], x[1]))  # 同时刻先离开
    cur = maxv = 0
    times = []
    for t, d in timeline:
        cur += d
        if cur > maxv:
            maxv = cur
            times = [t]
        elif cur == maxv:
            times.append(t)
    return maxv, times
```

# 追问

- 同时间有进有出，怎么处理才不重复计数？
- 变式：求峰值持续时段怎么改？
- 复杂度是多少？
