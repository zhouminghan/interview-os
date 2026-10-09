---
id: SPARK-0051
type: technical
question: 什么是SparkContext？它的作用是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SparkContext 是应用和集群的入口，负责连接和资源。

# 参考回答

SparkContext 是 Spark 应用和集群之间的连接入口，负责申请资源、创建 RDD、发任务。老版本直接用，Spark 2.0 以后被 SparkSession 包了一层。

# 追问

- 一个应用能建多个 SparkContext 吗？
