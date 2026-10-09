---
id: STORAGE-0067
type: technical
question: 如何理解Hive的统计信息收集？请详细说明统计信息收集的方法、工具、使用场景和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 ANALYZE TABLE 收集统计信息。

# 参考回答

统计信息用 ANALYZE TABLE 收集行数、列基数、分布。CBO 靠它选执行计划。数据大变更后要重收集，否则计划不准。可以配自动收集。

# 追问

- 多久收集一次？
