---
id: FLINK-0620
type: technical
question: Flink 如何处理容错？
difficulty: 0
topic: []
source_type: knowledge
---

**Checkpoint**：定期快照状态，故障时从最近 Checkpoint 恢复。通过两阶段提交实现 Exactly-Once。
**Savepoint**：手动触发，用于升级/迁移。
