---
id: STORAGE-0290
type: technical
question: HBase的分布式锁实现机制是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠 ZooKeeper 临时节点实现分布式锁。

# 参考回答

HBase 的分布式锁主要靠 ZooKeeper 的临时顺序节点实现，节点存在就是持有锁，挂了自动释放。用于 Master 选主和 Region 操作协调。

# 追问

- ZK 锁原理？
