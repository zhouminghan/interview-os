---
id: FLINK-0627
type: technical
question: Spark vs Flink Checkpoint 区别
difficulty: 0
topic: []
source_type: knowledge
---

| | Spark | Flink |
|---|-------|-------|
| 语义 | At-Least-Once | Exactly-Once |
| 机制 | RDD Checkpoint（截断血缘） | 分布式快照（Chandy-Lamport） |

---

