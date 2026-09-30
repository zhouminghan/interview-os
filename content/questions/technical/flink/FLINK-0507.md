---
id: FLINK-0507
type: technical
question: 什么是 TaskSlot？
difficulty: 0
topic: []
source_type: knowledge
---

在 Flink 架构中，TaskManager 是实际用于执行我们程序的工作节点，TaskManager 是一个 JVM 进程。实际上，为了实现资源隔离和并行执行的概念，提出了 TaskSlot 的概念，它实际上是用来控制 TaskManager 能接收多少 Task。TaskManager 由 TaskSlot 控制，也就是说，如果我们有一个 source 指定了并行度 3，那么它会使用 3 个 slot。其他算子如果没有 shuffle，且并行度相同，会被合并在一起——这是一个优化概念。

---
