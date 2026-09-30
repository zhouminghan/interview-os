---
id: FLINK-0615
type: technical
question: TaskSlot 是什么？
difficulty: 0
topic: []
source_type: knowledge
---

TaskManager 内的资源隔离单位。每个 Slot 占 TaskManager 的一份内存，控制能接收多少 Task。同一个 Job 的不同 Task 可共享 Slot。
