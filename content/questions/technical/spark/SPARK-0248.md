---
id: SPARK-0248
type: technical
question: 什么是 RDD（弹性分布式数据集）？
difficulty: 0
topic: []
source_type: knowledge
---

**RDD（Resilient Distributed Dataset）**是 Apache Spark 中对数据的抽象。它是跨多个分区分布的记录的分布式、容错集合。RDD 在幕后隐藏了数据分区和分布。RDD 的主要特性如下：
- **分布式**：RDD 中的数据分布在多个节点上。
- **弹性（容错）**：RDD 是容错的数据集。在节点故障的情况下，Spark 可以重新计算数据。
- **数据集**：它类似于 Scala 中的集合的数据集合。
- **不可变**：RDD 中的数据在创建后不能被修改，但可以通过转换（Transformation）来变换它。

---
