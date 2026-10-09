---
id: SPARK-0143
type: technical
question: Spark SQL的统计信息收集机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

收集表大小、基数、分布，供 CBO 估成本。

# 参考回答

统计信息用 ANALYZE TABLE 收集，记录行数、列基数、min max 等。CBO 靠它估算 join 成本和顺序。数据变更后要定期更新。

# 追问

- 统计信息过期会怎样？
