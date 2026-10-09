---
id: SPARK-0141
type: technical
question: Spark SQL的查询计划是如何生成的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

解析 SQL 成逻辑计划，优化后转物理计划。

# 参考回答

查询计划生成流程：SQL 解析成未解析的逻辑计划，绑定 schema 后成逻辑计划，Catalyst 优化，再转成物理计划，最后生成 RDD 执行。

# 追问

- 逻辑计划和物理计划差在哪？
