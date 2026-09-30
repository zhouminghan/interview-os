---
id: FLINK-0526
type: technical
question: 解释 Flink 作业执行架构？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Flink 作业执行架构如下：

- **Program（程序）**：是在 Flink 集群上执行的一段代码。
- **Client（客户端）**：负责从给定程序获取代码并创建作业数据流图，然后传递给 JobManager。它还检索作业数据。
- **JobManager（作业管理器）**：负责从 Client 获取作业数据流图后生成执行图。它将作业分配给集群中的 TaskManager 并监控其执行。
- **TaskManager（任务管理器）**：负责执行 JobManager 分配给它的所有任务。各 TaskManager 在指定的并行度下在其各自的 slot 中执行任务。负责向 JobManager 报告任务状态。

---
