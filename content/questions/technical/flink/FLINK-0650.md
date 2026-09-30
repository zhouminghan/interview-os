---
id: FLINK-0650
type: technical
question: 高并发数据处理中，怎么保证不丢不重？Exactly-Once 在全链路是怎么贯穿的？
difficulty: 0
topic: []
source_type: knowledge
---

**全链路 Exactly-Once 分层保证**：

| 环节 | 机制 |
|------|------|
| **日志采集 → Kafka** | Producer 幂等 + acks=all |
| **Kafka → Flink** | Consumer offset 绑定 Checkpoint |
| **Flink 内部** | Checkpoint + Barrier 对齐 |
| **Flink → Iceberg** | 两阶段提交（CP 成功才 commit snapshot） |
| **Flink → Redis** | 幂等写入（At-Least-Once + 业务幂等，SET 覆盖天然去重） |

**端到端的故障恢复场景**：

假设 Flink 任务在 T=10:05:30 崩溃，最近一次成功 CP 是 T=10:05:00：
1. 恢复时，Kafka Source 从 10:05:00 的 offset 重新消费
2. Iceberg Sink 在 10:05:00 之后写入的文件没有 commit → 对下游不可见
3. 恢复后重新处理 10:05:00-10:05:30 的数据 → 重新写入 + commit → 不重不丢

---
