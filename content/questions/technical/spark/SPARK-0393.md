---
id: SPARK-0393
type: technical
question: 大表 Join 小表 → Broadcast Join
difficulty: 0
topic: []
source_type: knowledge
---

小表广播到每个 Executor 内存，避免 Shuffle。
阈值：`spark.sql.autoBroadcastJoinThreshold`（默认 10MB）
