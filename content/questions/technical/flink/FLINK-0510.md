---
id: FLINK-0510
type: technical
question: Flink 的 Slot 和并行度之间有什么关系？
difficulty: 0
topic: []
source_type: knowledge
---

Slot 是 TaskManager 中的概念，并行度是程序中的概念，即执行层级的概念。实际上，Slot 指定了这个 TaskManager 有多少个 slot，能支持多少并行度；但程序开发的并行度使用 slot，即 TaskManager 是提供者，程序是使用者。

---
