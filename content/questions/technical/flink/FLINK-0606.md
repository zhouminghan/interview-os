---
id: FLINK-0606
type: technical
question: 集群角色有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

| 角色 | 作用 |
|------|------|
| **JobManager** | 协调者：接收 Job、调度、Checkpoint、故障恢复 |
| **TaskManager** | 执行者：管理资源（内存/磁盘/网络），运行 Task |
| **Client** | 提交端：预处理程序，提交到集群 |
