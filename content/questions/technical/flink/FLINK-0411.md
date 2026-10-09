---
id: FLINK-0411
type: technical
question: 解释FlinkSQL与Prometheus和Grafana的集成监控方案。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Metrics Reporter 推指标到 Prometheus，Grafana 展示。

# 参考回答

监控方案用 Metrics Reporter 把 Flink 指标推到 Prometheus，Grafana 出图配告警。监控吞吐、延迟、checkpoint、资源等核心指标。

# 追问

- 监控哪些核心指标？
