---
id: STORAGE-0591
type: technical
question: Clickhouse的监控指标有哪些关键项？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查询量、延迟、资源、副本。

# 参考回答

关键指标是查询量、查询延迟、CPU 内存磁盘、副本同步、写入速率。监控这些能发现问题。Prometheus 采集。

# 追问

- 关键指标有哪些？
