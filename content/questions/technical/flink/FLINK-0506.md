---
id: FLINK-0506
type: technical
question: Flink 集群的角色有哪些，各有什么作用？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 程序运行时主要有三个角色：TaskManager、JobManager 和 Client。

- **JobManager**：在集群中充当管理者的角色，是整个集群的协调者。负责接收 Flink Job 的执行、协调 Checkpoint、从故障中恢复，以及管理 TaskManager。
- **TaskManager**：负责所在节点的资源信息，如内存、磁盘、网络。启动时向 JobManager 汇报资源情况。
- **Client**：是 Flink 程序的提交客户端。用户提交 Flink 程序时，首先创建一个 Client，然后将用户提交的程序进行预处理并提交到集群进行处理。

---
