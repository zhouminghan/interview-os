---
id: STORAGE-0315
type: technical
question: 解释HBase的数据本地性实现机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Region 数据尽量和 RegionServer 同节点。

# 参考回答

数据本地性靠 HDFS 副本位置和 Region 分配结合，Region 优先分配到数据所在节点，读走本地 HDFS。Region 迁移后本地性下降，重新 compact 或迁移恢复。

# 追问

- 本地性丢了影响大吗？
