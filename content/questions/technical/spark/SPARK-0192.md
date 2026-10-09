---
id: SPARK-0192
type: technical
question: Structured Streaming的监控告警机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

指标接入 Prometheus 或告警系统。

# 参考回答

监控告警把 Streaming 指标接到 Prometheus 这类系统，设延迟或积压阈值告警。Streaming 要特别关注积压和延迟突变。

# 追问

- 告警阈值怎么定？
