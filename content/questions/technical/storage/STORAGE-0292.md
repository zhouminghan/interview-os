---
id: STORAGE-0292
type: technical
question: HBase的Master选举过程是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Master 在 ZK 抢锁选主。

# 参考回答

Master 启动后在 ZooKeeper 创建临时节点抢主，谁抢到谁是 active Master，其他是 backup。active 挂了，backup 抢到节点成为新主。

# 追问

- Master 选举依赖什么？
