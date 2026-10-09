---
id: STORAGE-0256
type: technical
question: HBase中的ZooKeeper的作用是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ZK 管元数据、选主、节点注册。

# 参考回答

ZooKeeper 存 HBase 的元数据位置、做 Master 选主、记录 RegionServer 状态。RegionServer 心跳和注册也走 ZK。是 HBase 协调服务的核心。

# 追问

- ZK 里存什么？
