---
id: SPARK-0175
type: technical
question: 如何监控Structured Streaming应用程序？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看 Streaming UI 的指标和进度。

# 参考回答

监控看 Streaming Query Progress 和 UI，关注 input rate、处理速率、延迟、状态大小。积压持续增长要优化。

# 追问

- Query Progress 里看什么？
