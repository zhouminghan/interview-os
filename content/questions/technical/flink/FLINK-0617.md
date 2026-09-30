---
id: FLINK-0617
type: technical
question: 什么是 Watermark？
difficulty: 0
topic: []
source_type: knowledge
---

Watermark 是处理乱序数据的核心机制。表示「时间 T 之前的数据已经到齐」。当 Watermark > 窗口结束时间时，触发窗口计算。**传输机制**：从 Source 向下游广播，取所有上游的最小值。
