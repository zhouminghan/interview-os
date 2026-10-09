---
id: FLINK-0341
type: technical
question: 解释FlinkSQL的监控指标及如何进行监控配置。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

吞吐、延迟、checkpoint、反压、资源指标。

# 参考回答

监控指标有吞吐量、延迟、checkpoint 成功率、反压、CPU 内存、状态大小。用 Metrics Reporter 接到 Prometheus 等，配 Grafana 和告警。

# 追问

- 核心监控哪几个？
