---
id: FLINK-0546
type: technical
question: TaskManager 的职责是什么？
difficulty: 0
topic: []
source_type: knowledge
---

TaskManager 负责执行数据流任务并将结果返回给 JobManager。它以 slot 的形式执行任务，因此 slot 的数量表示进程执行的数量。

---
