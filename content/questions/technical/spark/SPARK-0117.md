---
id: SPARK-0117
type: technical
question: Spark SQL的架构是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

解析、优化、执行三层，核心是 Catalyst。

# 参考回答

Spark SQL 架构是 SQL 解析成逻辑计划，Catalyst 做逻辑优化和物理优化，最后生成 RDD 执行。优化器是核心，负责谓词下推、列剪裁这些。

# 追问

- 逻辑优化和物理优化分别做什么？
