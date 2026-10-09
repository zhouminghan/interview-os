---
id: SPARK-0156
type: technical
question: 如何监控Spark Streaming应用程序？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看 Streaming UI 和指标。

# 参考回答

监控看 Streaming UI，关注处理延迟、积压量、batch 耗时。积压持续增长说明处理跟不上，要优化或加资源。

# 追问

- 积压增长怎么定位？
