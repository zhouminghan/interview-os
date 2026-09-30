---
id: SPARK-0358
type: technical
question: 什么是 RDD（弹性分布式数据集）？
difficulty: 0
topic: []
source_type: knowledge
---

RDD 是 Spark 的基本数据结构，代表分布式环境中不可变的、容错的数据集合。每个数据集被划分为逻辑分区，可在集群不同节点上并行计算。RDD 可包含任何类型的 Java、Python、Scala 对象。
