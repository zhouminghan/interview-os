---
id: FLINK-0004
type: technical
question: Flink 如何保证数据被精准一次地消费
topic: [flink, exactly-once]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-08-27-alibaba-data-dev
    company: 阿里巴巴
    position: 数据开发（一面）
    date: 2026-08-27
---

# 一句话

Flink 靠 checkpoint 状态快照 + barrier 对齐 + 端到端两阶段提交实现 exactly-once。

# 30 秒回答

checkpoint 定期快照状态和 source offset，失败从最近 checkpoint 恢复；sink 端用两阶段提交（如 Kafka 事务）保证结果不重不丢，实现端到端精准一次。

# 1 分钟回答

- 状态一致性：checkpoint 保存状态和 source offset
- barrier 对齐：保证多流 checkpoint 一致
- 恢复：失败从最近 checkpoint 回放
- sink 两阶段提交：事务性写入，避免重复
- 前提：source/sink 都支持事务或幂等，否则 at-least-once + 幂等

# 追问

- 端到端 exactly-once 需要哪些条件？
- Kafka 怎么支持两阶段提交？
- 不支持事务的 sink 怎么做幂等？
