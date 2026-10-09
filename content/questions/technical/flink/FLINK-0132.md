---
id: FLINK-0132
type: technical
question: 如何实现Flink与第三方监控系统的集成？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Metrics Reporter 接 Prometheus 等。

# 参考回答

监控集成用 Metrics Reporter 把 Flink 指标推到 Prometheus、InfluxDB 等，再配 Grafana 和告警。

# 追问

- 常见监控栈是什么？
