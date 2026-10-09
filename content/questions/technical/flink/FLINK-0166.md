---
id: FLINK-0166
type: technical
question: 如何设计Flink作业的监控告警系统？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

指标采集加阈值告警，分层通知。

# 参考回答

监控告警采集吞吐、延迟、checkpoint、反压、资源指标，设阈值分级告警。关键作业有专门的告警和值班。

# 追问

- 告警阈值怎么定？
