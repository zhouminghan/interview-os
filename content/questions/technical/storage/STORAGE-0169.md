---
id: STORAGE-0169
type: technical
question: 如何优化Hive的执行计划？请详细说明执行计划的优化策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看计划定位，用优化策略改进。

# 参考回答

执行计划优化先 EXPLAIN 看，找全表扫和大 shuffle，用 MapJoin、分区裁剪、并行执行改进。统计信息准能让优化器选对计划。

# 追问

- 计划里重点看什么？
