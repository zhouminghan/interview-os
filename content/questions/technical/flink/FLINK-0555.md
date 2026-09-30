---
id: FLINK-0555
type: technical
question: KeyedProcessFunction 如何工作？
difficulty: 0
topic: []
source_type: knowledge
---

`KeyedProcessFunction` 有一个 `onTimer` 操作。事件时间调用的时间要看 Watermark 是否大于触发时间。如果大于，就计算；如果不大于，就等待。如果是 Kafka，默认是触发最短时间的分区键。

---
