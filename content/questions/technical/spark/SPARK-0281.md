---
id: SPARK-0281
type: technical
question: Spark 中的集群管理器类型？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 的集群管理器主要类型如下：
- **Standalone**：包含在 Spark 中的简单集群管理器，可以手动启动 Spark。
- **Spark on Mesos**：在此模式中，Mesos master 替代 Spark master 作为集群管理器。当 Driver 创建作业时，Mesos 将确定哪台机器处理任务。
- **Hadoop YARN**：在此设置中，Hadoop YARN 用于集群。此设置有两种模式：集群模式中，Spark Driver 在由 YARN 在集群上管理的 master 进程中运行；客户端模式中，Spark Driver 在客户端进程中运行，application master 用于从 YARN 请求资源。

---
