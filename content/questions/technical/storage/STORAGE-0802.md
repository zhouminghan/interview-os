---
id: STORAGE-0802
type: technical
question: 请解释 Kafka 生态中 leader 和 follower 的概念？
difficulty: 0
topic: []
source_type: knowledge
---

- **Leader**：每个分区有一个 broker 充当 leader，负责该分区的所有读写请求。
- **Follower**：其他 broker 复制 leader 的数据。如果 leader 故障，follower 可被选举为新 leader，确保高可用。
