---
id: SPARK-0053
type: technical
question: 什么是SparkSession？它与SparkContext的关系是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SparkSession 是统一入口，内部包了 SparkContext。

# 参考回答

SparkSession 是 Spark 2.0 后的统一入口，整合了 SQLContext 和 HiveContext，内部持有 SparkContext。日常用 SparkSession 就行，SparkContext 还是底层连接。

# 追问

- 怎么从 SparkSession 拿 SparkContext？
