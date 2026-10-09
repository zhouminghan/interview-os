---
id: STORAGE-0229
type: technical
question: 什么是HBase的Region？Region的分裂(Split)机制是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Region 是表的分片，大了自动分裂。

# 参考回答

Region 是 HBase 表按 RowKey 范围的分片，分布在不同 RegionServer。Region 数据大到阈值就分裂成两个，保持负载均衡和查询效率。

# 追问

- Region 分裂影响查询吗？
