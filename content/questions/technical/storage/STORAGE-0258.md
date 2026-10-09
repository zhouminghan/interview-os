---
id: STORAGE-0258
type: technical
question: HBase中的数据本地性(Data Locality)是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数据尽量和 RegionServer 在同一节点。

# 参考回答

数据本地性是 Region 的数据尽量和 RegionServer 在同节点，读的时候优先本地 HDFS，减少网络。Region 迁移后本地性会降低，需要时间恢复。

# 追问

- 本地性丢了怎么办？
