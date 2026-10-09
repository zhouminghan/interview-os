---
id: FLINK-0065
type: technical
question: 检查点（Checkpoint）与保存点（Savepoint）的区别是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpoint 自动周期做，savepoint 手动触发可迁移。

# 参考回答

checkpoint 是自动周期性的，用于故障恢复，可被系统清理；savepoint 是手动触发的，用于升级、迁移、手动回滚，不会被自动删。savepoint 更稳定，支持跨版本恢复。

# 追问

- 升级作业为什么要 savepoint？
