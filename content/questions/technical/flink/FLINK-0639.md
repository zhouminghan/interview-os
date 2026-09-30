---
id: FLINK-0639
type: technical
question: 实时特征提取中，遇到迟到数据怎么处理的？
difficulty: 0
topic: []
source_type: knowledge
---

采用 **Watermark + 允许延迟 + 侧输出流** 三层机制：

1. **Watermark**：基于事件时间，设置 `maxOutOfOrderness = 3 分钟`。即 Watermark = 当前最大事件时间 - 3 分钟。
2. **允许延迟窗口**：`allowedLateness(Time.minutes(2))`。窗口触发计算后，还允许 2 分钟内的迟到数据更新结果。
3. **侧输出流**：超过 5 分钟（3+2）的极端迟到数据，输出到侧输出流单独处理（写入延迟日志表，由离线任务补偿）。

为什么设 3 分钟：分析了历史日志延迟分布，99% 的数据在 2 分钟内到达，3 分钟覆盖 99.9%。

---
