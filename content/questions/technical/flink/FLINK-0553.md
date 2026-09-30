---
id: FLINK-0553
type: technical
question: Flink 窗口关联（window join）
difficulty: 0
topic: []
source_type: knowledge
---

1. **窗口关联**：即根据指定字段和滚动/滑动窗口、会话窗口进行 inner join
2. **coGroup**：实际上是 left join 和 right join
3. **区间关联（interval join）**：窗口关联存在一些问题，因为有些数据确实在会议后才到达，而且可能很久之后才到。这时会有区间关联，但必须是事件时间，还需要指定 Watermark 和水位和获取事件时间戳，并设置偏移区间，因为关联不能一直等待。

---
