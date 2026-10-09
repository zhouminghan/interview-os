---
id: FLINK-0107
type: technical
question: Flink的监控指标有哪些？如何收集？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

吞吐、延迟、checkpoint、反压、资源等。

# 参考回答

监控指标有吞吐量、延迟、checkpoint 成功率、反压、CPU 内存、状态大小。用 Metrics Reporter 接到 Prometheus 等系统。

# 追问

- Metrics Reporter 怎么配？
