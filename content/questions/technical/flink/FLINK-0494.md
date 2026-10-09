---
id: FLINK-0494
type: technical
question: 请详细解释Kafka集群的容量规划，包括存储容量、网络带宽、CPU资源等，以及如何评估集群的扩展性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按吞吐、消息量、保留期估算资源。

# 参考回答

容量规划按吞吐、消息大小、保留时间估算存储，按峰值吞吐估带宽，按并发估 CPU。留余量，评估扩展时看能否水平加 broker。

# 追问

- 存储容量怎么算？
