---
id: SPARK-0299
type: technical
question: 解释 Spark 的架构工作原理？
difficulty: 0
topic: []
source_type: knowledge
---

Spark 应用以独立进程的形式运行，由 Driver 程序通过 SparkSession 对象很好地协调。集群管理器或 Spark 的资源管理器实体将运行 Spark 作业的任务分配给工作节点（按照每个分区一个任务的原则）。有各种迭代算法反复应用到数据上，以在各次迭代中缓存数据集。每个任务对其分区内的数据集应用其操作单元，并生成新的分区数据集，这些结果发送回主 Driver 应用以进行进一步处理或存储到磁盘上。

---
