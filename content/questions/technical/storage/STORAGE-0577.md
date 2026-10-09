---
id: STORAGE-0577
type: technical
question: 解释Clickhouse的副本同步机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本通过 ZK 协调同步。

# 参考回答

副本同步靠 ZooKeeper 协调，写入一个副本后其他副本从队列拉取数据块同步。副本间最终一致，ZK 记录同步状态。

# 追问

- 副本怎么同步？
