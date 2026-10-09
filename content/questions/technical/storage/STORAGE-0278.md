---
id: STORAGE-0278
type: technical
question: 解释HBase中ZooKeeper的作用和存储的重要信息。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ZK 存 Meta 位置和节点状态。

# 参考回答

ZooKeeper 存 Meta 表位置、Master 信息、RegionServer 注册状态。客户端先查 ZK 找 Meta 位置，再定位数据。ZK 挂了 HBase 不可用。

# 追问

- ZK 里存什么关键信息？
