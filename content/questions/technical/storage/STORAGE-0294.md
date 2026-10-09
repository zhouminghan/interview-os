---
id: STORAGE-0294
type: technical
question: HBase的Region状态机是如何工作的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Region 在多个状态间转换。

# 参考回答

Region 状态机定义 Region 从未分配到打开、关闭、分裂等状态及转换条件。Master 和 RegionServer 协作管理状态，保证数据一致和故障恢复。

# 追问

- 有哪些状态？
