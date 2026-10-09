---
id: STORAGE-0393
type: technical
question: 如何设计HBase的监控告警体系？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

指标采集、阈值告警、分级通知。

# 参考回答

监控告警体系用 Prometheus 采集指标，按阈值分级告警，通知走邮件电话 IM。核心指标是 Region、读写量、延迟、GC、磁盘。定期校准阈值。

# 追问

- 告警怎么分级？
