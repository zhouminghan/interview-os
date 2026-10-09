---
id: STORAGE-0147
type: technical
question: 如何优化Hive的并发查询？请详细说明并发查询的优化策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理资源分配，避免大查询互相拖累。

# 参考回答

并发查询优化靠合理资源队列、限制单查询资源、用 LLAP 或物化视图降单查询开销。避免一个大查询占满资源拖垮其他。

# 追问

- 并发和资源怎么平衡？
