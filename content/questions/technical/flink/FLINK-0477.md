---
id: FLINK-0477
type: technical
question: 在Kafka集群中，如何优化消息的批量处理性能？请详细说明批量大小、批处理间隔等参数的选择，以及如何评估批处理性能。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量大小和间隔按吞吐延迟权衡。

# 参考回答

批量大小越大吞吐越高但延迟越大，间隔同理。按业务延迟要求调，压测找平衡点。评估看吞吐和 P99 延迟。

# 追问

- 吞吐和延迟怎么平衡？
