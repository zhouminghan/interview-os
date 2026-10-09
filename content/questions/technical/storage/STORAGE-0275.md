---
id: STORAGE-0275
type: technical
question: 详细描述HBase的整体架构，包括各个组件及其作用。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Master 管元数据，RegionServer 管数据，ZK 协调。

# 参考回答

HBase 架构有 Master 管表操作和 Region 分配，RegionServer 存数据处理读写，ZooKeeper 做协调和选主，HDFS 做底层存储。客户端通过 ZK 找到 Meta 再定位数据。

# 追问

- 各组件怎么协作？
