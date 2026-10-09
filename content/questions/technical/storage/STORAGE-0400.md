---
id: STORAGE-0400
type: technical
question: 在实际项目中如何优化HBase的读写性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey、缓存、批量综合优化。

# 参考回答

读写优化从 RowKey 设计、BlockCache 和 MemStore 调优、批量操作、预分区。先定位读写瓶颈，再针对性调。压测验证效果。

# 追问

- 读写优化重点？
