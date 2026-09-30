---
id: SPARK-0272
type: technical
question: Apache Spark 分布式应用的核心组件？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 分布式应用的核心组件如下：
- **集群管理器（Cluster Manager）**：负责在多个节点上启动执行器和 Driver 的组件。可以根据需求使用不同类型的集群管理器，如 Standalone、YARN、Mesos 等。
- **Driver**：Spark 中运行应用程序 `main()` 函数的主要程序，创建 `SparkContext`，监听来自执行器的传入连接，还可以在集群上调度任务。
- **执行器（Executor）**：工作节点上的进程，启动用于运行应用程序，可以运行任务并使用内存或磁盘存储来执行任务。

---
