---
id: STORAGE-0170
type: technical
question: 什么是Hive的统计信息收集？请详细说明统计信息收集的方法、配置和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ANALYZE TABLE 收集统计信息。

# 参考回答

统计信息用 ANALYZE TABLE 收集行数、基数、分布，CBO 靠它选计划。数据变更后要重收集。收集有开销，可以配自动收集。

# 追问

- 统计信息多久收集？
