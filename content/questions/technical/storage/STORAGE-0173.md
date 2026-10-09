---
id: STORAGE-0173
type: technical
question: 如何优化Hive的并发处理？请详细说明并发处理的优化策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理资源分配，控制单查询资源。

# 参考回答

并发处理优化靠资源队列隔离、限制单查询资源、并行执行。避免大查询占满资源。按业务分队列，错峰调度。

# 追问

- 并发和资源怎么平衡？
