---
id: FLINK-0276
type: technical
question: FlinkSQL中的Savepoint和Checkpoint有什么区别？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpoint 自动，savepoint 手动可迁移。

# 参考回答

checkpoint 是自动周期性的，用于故障恢复；savepoint 手动触发，用于升级迁移，不会自动删。SQL 作业也是这个区别。

# 追问

- 升级 SQL 作业用哪个？
