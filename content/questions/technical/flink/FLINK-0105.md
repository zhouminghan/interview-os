---
id: FLINK-0105
type: technical
question: 如何配置高可用（HA）的Flink集群？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多 JobManager 加 ZooKeeper 选主。

# 参考回答

高可用配多个 JobManager，用 ZooKeeper 做选主和元数据存储，主挂了自动切。checkpoint 存可靠存储，恢复靠 savepoint。

# 追问

- ZooKeeper 在 HA 里的作用？
