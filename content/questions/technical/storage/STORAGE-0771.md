---
id: STORAGE-0771
type: technical
question: Hive 可以以哪些模式运行？
difficulty: 0
topic: []
source_type: knowledge
---

- **本地模式**：MapReduce 任务在本地机器运行，使用本地文件系统
- **伪分布式模式**：所有守护进程在同一虚拟机，用于开发测试
- **分布式模式**：NameNode、DataNode 等分布在不同机器，生产环境
