---
id: STORAGE-0121
type: technical
question: 什么是Hive的统计信息？请详细说明统计信息的类型、收集方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

统计信息描述数据分布，供优化器估算。

# 参考回答

统计信息有行数、列基数、分布，用 ANALYZE TABLE 收集。CBO 靠它选执行计划。数据变更后要重收集，否则计划不准。

# 追问

- 统计信息过期影响？
