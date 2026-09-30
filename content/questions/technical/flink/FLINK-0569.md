---
id: FLINK-0569
type: technical
question: 如何处理迟到数据？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 的 Watermark 是一个延迟触发机制。通常 Watermark 和窗口用来处理乱序数据。Watermark 最根本的是一个时间机制。例如，我设置最大乱序时间为 2 秒，窗口时间为 5 秒，那么当事件时间大于 7 秒时，窗口会被触发。当然，如果有数据分区，例如在 Kafka 中接入 `watermark`，那么 `watermark` 会流动，取所有分区中最小的 `watermark` 来流动，因为只有最小的才能保证所有之前的数据都到了，才能触发计算。

---
