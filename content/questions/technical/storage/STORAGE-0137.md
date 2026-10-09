---
id: STORAGE-0137
type: technical
question: 如何优化Hive的查询计划？请详细说明查询计划的优化策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看计划定位，用优化规则改进。

# 参考回答

查询计划优化先 EXPLAIN 看，找全表扫和大 shuffle，再用谓词下推、MapJoin、并行执行改进。统计信息准能让 CBO 选对计划。

# 追问

- 计划里找什么？
