---
id: SPARK-0138
type: technical
question: 如何实现Spark SQL的自定义优化规则？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

继承 Rule 类，注册到 Catalyst 扩展。

# 参考回答

自定义优化规则就是继承 Rule[LogicalPlan]，写 transform 逻辑做计划改写，再通过 spark.sql.extensions 注册。用于加自己的逻辑优化，门槛较高。

# 追问

- 自定义规则适合什么场景？
