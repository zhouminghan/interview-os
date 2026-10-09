---
id: STORAGE-0248
type: technical
question: HBase中的Region如何分配？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Master 把 Region 分配到 RegionServer。

# 参考回答

Region 由 Master 分配到 RegionServer，分配考虑负载均衡和数据本地性。Region 分裂或 RegionServer 挂了会触发重新分配，元数据在 Meta 表记录。

# 追问

- Region 重分配会中断吗？
