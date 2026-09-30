---
id: SPARK-0384
type: technical
question: AQE — 自适应查询执行
difficulty: 0
topic: []
source_type: knowledge
---

AQE 是 Spark 3.0 引入的核心优化特性，根据运行时真实数据统计信息动态调整执行计划。Spark 3.2+ 默认开启。

**三大核心能力**：

| 能力 | 说明 | 关键参数 |
|------|------|---------|
| 动态合并 Shuffle 分区 | 自动合并过小分区 | `advisoryPartitionSizeInBytes = 64m` |
| 动态切换 Join 策略 | 运行时数据量小则自动 Broadcast | `autoBroadcastJoinThreshold = 10m` |
| 优化数据倾斜 Join | 自动拆分倾斜分区 | `skewJoin.enabled = true` |
