---
id: SPARK-0068
type: technical
question: 如何监控Spark应用程序的运行状态？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看 Spark UI、日志和外部监控。

# 参考回答

监控主要看 Spark UI，能看到 job、stage、task、executor 状态和资源。还可以看 driver 和 executor 日志，或用 Prometheus 等外部监控。

# 追问

- Spark UI 里重点看什么？
