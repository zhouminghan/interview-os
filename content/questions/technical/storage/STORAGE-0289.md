---
id: STORAGE-0289
type: technical
question: 详细描述HBase的Region迁移过程。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

源关闭 Region，目标打开。

# 参考回答

Region 迁移先源 RegionServer 关闭 Region，然后目标 RegionServer 打开并加载数据。迁移期间该 Region 短暂不可用，用于负载均衡和故障恢复。

# 追问

- 迁移会丢数据吗？
