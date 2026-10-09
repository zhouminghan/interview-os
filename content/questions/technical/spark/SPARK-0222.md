---
id: SPARK-0222
type: technical
question: 如何优化Spark的监控系统？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

接入 Spark UI 和外部监控，及时发现问题。

# 参考回答

监控优化就是把 Spark UI、历史服务、Prometheus 接好，能快速定位慢 stage 和资源问题。监控不是性能优化，但能帮你找瓶颈。

# 追问

- 监控和调优什么关系？
