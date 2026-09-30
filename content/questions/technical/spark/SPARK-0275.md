---
id: SPARK-0275
type: technical
question: SparkContext 的作用？
difficulty: 0
topic: []
source_type: knowledge
---

**SparkContext** 是 Spark 中协调集群中不同 Spark 应用的核心对象。在集群中可以使用 SparkContext 连接到多个分配资源给多个应用的集群管理器。对于任何 Spark 程序，首先要创建 SparkContext 对象，通过该对象访问集群。要创建 SparkContext 对象，首先要创建 SparkConf 对象，包含应用的配置信息。在 Spark Shell 中，默认获得一个用于 Shell 的 SparkContext。

---
