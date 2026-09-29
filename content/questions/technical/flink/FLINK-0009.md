---
id: FLINK-0009
type: technical
question: Flink 和 Kafka 如何做高可用容错
topic: [flink, kafka, ha]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

Flink 靠 Checkpoint + 重启恢复，Kafka 靠副本 + ISR + Leader 选举。

# 30 秒回答

Flink 从最近 Checkpoint 恢复状态、按重启策略自动拉起，JobManager 用 ZK 做 HA；Kafka 多副本保证数据不丢，Leader 挂掉从 ISR 选新 Leader。

# 追问

- ISR 是什么？
- Flink 的重启策略有哪些？
