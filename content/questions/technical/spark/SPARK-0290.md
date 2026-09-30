---
id: SPARK-0290
type: technical
question: 什么是邻居聚合（Neighborhood Aggregation）？
difficulty: 0
topic: []
source_type: knowledge
---

**邻居聚合**是 Spark 图模块中的一个概念，指的是聚合有关每个顶点邻居的信息的任务。例如，想知道一本书引用了多少本书，或者一条推文被转发了多少次。这个概念用于迭代图算法，一些流行的用途包括 PageRank、最短路径等。可以使用 Spark 中的 `aggregateMessages()` 和 `mergeMsg()` 操作来实现邻居聚合。

---
