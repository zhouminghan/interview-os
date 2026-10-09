---
id: SPARK-0057
type: technical
question: 什么是DAG？它在Spark中的作用是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

DAG 描述计算依赖关系，用于调度和容错。

# 参考回答

DAG 是有向无环图，描述 RDD 之间的依赖关系。Spark 靠它切 Stage、安排执行顺序，也靠它做容错重算。

# 追问

- DAG 和 Stage 什么关系？
