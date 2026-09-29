---
id: FLINK-0013
type: technical
question: 实时链路消息延迟怎么排查和解决
topic: [flink, latency]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

分层定位 Kafka/Flink/Iceberg/下游，看 Lag、反压、Watermark、小文件。

# 30 秒回答

看 Kafka 消费 Lag、Flink Web UI 反压定位瓶颈算子、Watermark 是否卡住、Iceberg commit 时长和下游调度；按倾斜/并行度/小文件/资源分别解决。

# 追问

- 第一个标红的算子就是瓶颈吗？
- Watermark 卡住怎么看？
