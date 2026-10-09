---
id: FLINK-0489
type: technical
question: 在Kafka集群中，如何实现集群的故障诊断和问题排查？请详细说明日志分析、性能分析、问题定位等方法，以及如何快速恢复服务？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看监控、日志、状态定位，优先恢复服务。

# 参考回答

故障排查先看监控和日志定位，结合分区状态和消费组落后分析。定位根因后修复，优先恢复服务再深挖原因。保留现场。

# 追问

- 快速恢复优先还是定位优先？
