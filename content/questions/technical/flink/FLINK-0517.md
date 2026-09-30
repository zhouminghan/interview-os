---
id: FLINK-0517
type: technical
question: 什么是 Flink 中的 Watermark？
difficulty: 0
topic: []
source_type: knowledge
---

Watermark 是 Flink 用来处理乱序时间的一种机制。实际上，在 Flink 中，如果我们使用事件时间并以 Kafka 为 source，那么窗口的执行时间是以各分区中最小的时间为准来触发的，必须所有分区都触发才执行计算。为什么会这样？实际上是因为 Kafka 的分区是无序的（区内有序）。执行时间是最大时间减去 Watermark > 窗口结束时间，此时执行计算。

---
