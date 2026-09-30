---
id: FLINK-0551
type: technical
question: Flink Watermark 传输机制
difficulty: 0
topic: []
source_type: knowledge
---

Flink 中的 Watermark 机制用于处理乱序。Flink 必须是事件时间。一个简单的例子是：如果窗口是 5 秒，Watermark 是 2 秒，那么总共是 7 秒。此时什么时候触发计算？假设数据的初始时间是 1000，那么等到 6999 时会触发 5999 窗口的计算。所以下一个是 13999 时，在 10999 触发窗口计算。

实际上，这就是 Watermark 的机制。在多并行度情况下，例如在 Kafka 中，直到所有分区都达到才会触发窗口。

---
