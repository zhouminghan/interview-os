---
id: FLINK-0454
type: technical
question: 请详细说明Kafka的扩展性设计，包括水平扩展和垂直扩展的方式，以及如何评估集群的容量。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

水平加 broker，垂直加硬件。

# 参考回答

扩展主要水平加 broker，分区重分配均衡负载；垂直加磁盘内存 CPU。容量按吞吐、消息大小、保留时间估算存储和带宽。

# 追问

- 扩容会中断吗？
