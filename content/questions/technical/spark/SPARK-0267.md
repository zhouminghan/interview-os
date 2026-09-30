---
id: SPARK-0267
type: technical
question: 什么是 Spark Driver？
difficulty: 0
topic: []
source_type: knowledge
---

**Spark Driver** 是在主节点机器上运行的程序，负责声明对 RDD 的任何操作（转换或行动）。通过 Spark Driver 可以跟踪数据集上的所有操作，还可以用于重建 Spark 中的 RDD。

Driver 程序是 Spark 中运行应用程序 `main()` 函数的主程序，创建 `SparkContext`，监听来自执行器的传入连接，还可以在集群上调度任务，运行位置靠近工作节点。

---
