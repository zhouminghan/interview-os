---
id: FLINK-0578
type: technical
question: Flink/Kafka 如何做高可用（容错）？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415 Q19

**Flink**：Checkpoint + 重启策略自动恢复；JobManager 通过 ZooKeeper Leader 选举实现高可用。

**Kafka**：副本（Replication）机制，每个 Partition 多副本分布不同 Broker。Leader 负责读写，Follower 同步。ISR（In-Sync Replicas）列表，Leader 挂了从 ISR 选新 Leader。

---
