---
id: WAREHOUSE-0297
type: technical
question: 超大表和小表怎么 JOIN？
difficulty: 0
topic: [SHEIN]
source_type: knowledge
---

**Map Join（Broadcast Join）**：小表广播到每个 Executor 内存，避免 Shuffle。
- 小表阈值：`spark.sql.autoBroadcastJoinThreshold`（默认 10MB）
- Hive 中：`/*+ MAPJOIN(small_table) */`
