---
id: FLINK-0545
type: technical
question: JobManager 的职责是什么？
difficulty: 0
topic: []
source_type: knowledge
---

JobManager 负责管理和协调程序的分布式处理。它将任务分配给节点管理器，处理故障恢复，并执行 Checkpoint。它有三个组件：ResourceManager、Dispatcher 和 JobMaster。

---
