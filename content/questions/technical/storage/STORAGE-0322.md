---
id: STORAGE-0322
type: technical
question: HBase的监控系统实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JMX 指标加监控平台采集。

# 参考回答

HBase 通过 JMX 暴露指标，Prometheus 或 Ganglia 采集，看 Region 数、读写量、内存、GC。配告警。监控是运维的重要部分。

# 追问

- 监控哪些指标？
