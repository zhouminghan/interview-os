---
id: SPARK-0375
type: technical
question: 什么是 Spark Driver？
difficulty: 0
topic: []
source_type: knowledge
---

Spark Driver 是运行应用程序 main() 函数的进程，负责：
- 创建 SparkContext
- 将用户程序转换为 Task
- 在 Executor 间调度 Task
- 在 Worker 节点上运行 Executor
