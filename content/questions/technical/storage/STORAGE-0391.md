---
id: STORAGE-0391
type: technical
question: 在生产环境中如何实现HBase的高可用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多 Master、多副本、ZK 集群。

# 参考回答

高可用配多 Master 选主、HDFS 多副本、ZooKeeper 集群。RegionServer 挂了 Region 自动重分配。数据多副本保证不丢。

# 追问

- 高可用关键是什么？
