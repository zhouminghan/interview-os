---
id: SPARK-0376
type: technical
question: SparkContext 的作用？
difficulty: 0
topic: []
source_type: knowledge
---

SparkContext 是 Spark 功能的主入口点，代表与 Spark 集群的连接。用于创建 RDD、累加器和广播变量，每个 JVM 只能有一个活跃的 SparkContext。
