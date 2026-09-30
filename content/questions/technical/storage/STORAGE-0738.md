---
id: STORAGE-0738
type: technical
question: 请解释 Kafka 生态中 leader 和 follower 的概念？
difficulty: 0
topic: []
source_type: knowledge
---

在 Apache Kafka 中，"leader" 和 "follower" 的概念指的是 broker 在 Kafka 集群中管理 topic 分区时所扮演的角色。

- **Leader**：对于一个 topic 的每个分区，有一个 broker 充当 leader。Leader 负责处理该分区的所有读写请求。当消息被生产到分区时，它们被发送到 leader broker，然后由 leader 将消息写入其本地存储。Leader broker 确保消息按照接收顺序存储。

- **Follower**：Follower 是集群中的其他 broker，它们复制 leader 的数据以实现容错。每个 follower 持续从 leader 拉取消息以保持最新，确保它拥有 leader 数据的精确副本。如果 leader broker 故障，其中一个 follower 可以被选举为新的 leader，确保高可用性。

---
