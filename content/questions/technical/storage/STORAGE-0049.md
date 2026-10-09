---
id: STORAGE-0049
type: technical
question: Hive中的统计信息是什么？如何收集？请详细说明统计信息的类型、收集方法、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

统计信息描述数据分布，供优化器估算成本。

# 参考回答

统计信息有行数、列基数、数据分布，用 ANALYZE TABLE 收集。CBO 靠它选 join 顺序和策略。数据变更后要重新收集，否则计划不准。

# 追问

- 统计信息过期怎么办？
