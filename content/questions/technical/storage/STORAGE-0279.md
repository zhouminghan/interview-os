---
id: STORAGE-0279
type: technical
question: HBase的Master在整个架构中起到什么作用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Master 管表操作和 Region 分配。

# 参考回答

Master 负责表的增删改、Region 分配和负载均衡、RegionServer 管理。不是数据读写路径上的节点，挂了短时间不影响读写，但管理操作不可用。

# 追问

- Master 挂了影响读写吗？
