---
id: FLINK-0572
type: technical
question: Flink 基于 Checkpoint 重启时，Kafka offset 能精确回溯吗？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：美团-大数据开发-20260415 Q11

**能精确回溯**。Checkpoint 快照里保存了 Kafka Consumer 的 offset，恢复时从快照中读取 offset 让 Consumer 从精确位置重新消费。

实现上用两阶段提交（2PC）：Checkpoint 触发时预提交，所有算子快照完成后正式提交 offset。失败则从上次成功 Checkpoint 的 offset 开始重消费。

注意：端到端 Exactly-Once 的前提是 Sink 也要支持事务或幂等写入。

---
