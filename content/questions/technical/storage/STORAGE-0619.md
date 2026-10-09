---
id: STORAGE-0619
type: technical
question: 解释Clickhouse的查询重写机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

优化器改写查询计划。

# 参考回答

查询重写是优化器把查询改写成更高效的等价形式，比如谓词下推、子查询改写。提升执行效率。

# 追问

- 查询重写做什么？
