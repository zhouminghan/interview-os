---
id: STORAGE-0341
type: technical
question: HBase的RegionServer调优策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

内存、线程、Region 数调优。

# 参考回答

RegionServer 调优内存分配、RPC 线程、Region 数量。Region 数别太多，内存够 BlockCache 和 MemStore。监控 GC 和负载。

# 追问

- Region 数怎么控制？
