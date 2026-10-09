---
id: SPARK-0125
type: technical
question: Spark SQL的Catalyst优化器是如何工作的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Catalyst 是 Spark SQL 的优化器，逻辑加物理优化。

# 参考回答

Catalyst 是 Spark SQL 的核心优化器，把逻辑计划做规则优化和成本优化，再生成物理执行计划。支持自定义规则扩展。它是 Spark SQL 快的关键。

# 追问

- Catalyst 的规则优化和成本优化区别？
