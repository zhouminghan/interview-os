---
id: STORAGE-0282
type: technical
question: HBase的Meta表结构是怎样的？存储了哪些信息？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Meta 表记录 Region 和 RegionServer 的映射。

# 参考回答

Meta 表存每个 Region 的 RowKey 范围、所在 RegionServer、状态。客户端通过它定位数据。Meta 本身也是一张表，位置存在 ZK。

# 追问

- Meta 表在哪？
