---
id: STORAGE-0257
type: technical
question: 解释HBase中的Table和Region的关系。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

表横向切成多个 Region。

# 参考回答

一张表按 RowKey 范围切成多个 Region，Region 是表的物理分片，分布在不同 RegionServer。表逻辑上完整，物理上分片存储。

# 追问

- Region 和表什么关系？
