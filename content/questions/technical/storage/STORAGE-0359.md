---
id: STORAGE-0359
type: technical
question: HBase的备份恢复性能如何优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用快照快速备份恢复。

# 参考回答

备份恢复优化用快照，比逐条导出快很多。恢复从快照重建表。增量备份用复制。定期演练恢复，控制恢复时间。

# 追问

- 快照恢复多久？
