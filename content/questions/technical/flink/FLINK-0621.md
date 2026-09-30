---
id: FLINK-0621
type: technical
question: Flink 如何确保精确一次消费？
difficulty: 0
topic: []
source_type: knowledge
---

1. Source 支持重放（Kafka offset 等）
2. Checkpoint 两阶段提交
3. Sink 端幂等或事务写入
4. 恢复时从 Checkpoint 的 offset 重新消费

---

