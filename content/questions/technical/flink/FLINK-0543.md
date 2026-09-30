---
id: FLINK-0543
type: technical
question: Flink 如何处理容错？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Flink 通过捕获数据流状态快照来管理流应用的容错，以便在故障情况下使用这些快照进行恢复。对于批处理，Flink 使用程序的转换序列进行恢复。

---
