---
id: STORAGE-0632
type: technical
question: Hive 可以以哪些模式运行？
difficulty: 0
topic: []
source_type: knowledge
---

Hive 可以在以下模式中运行：

- **本地模式（Local mode）**：在 Hive 本地模式中，与 Hive 相关的 MapReduce 作业在用户本地机器上运行。这是 Hadoop 使用本地文件系统的默认模式。
- **分布式模式（Distributed mode）**：在此模式中，Hive 和 Hadoop 都运行在完全分布式模式中。NameNode、DataNode、JobTracker、TaskTracker 等在不同机器上运行。
- **伪分布式模式（Pseudo-distributed mode）**：这是开发人员用于在部署到生产环境之前测试代码的模式。在此模式中，所有守护进程都运行在同一虚拟机上。通过此模式，可以快速编写脚本并在有限的数据集上进行测试。

---
