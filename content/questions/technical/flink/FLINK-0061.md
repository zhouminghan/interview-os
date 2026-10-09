---
id: FLINK-0061
type: technical
question: Flink如何处理大规模状态？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 RocksDB、状态 TTL、增量 checkpoint。

# 参考回答

大规模状态用 RocksDB 存到磁盘，配合增量 checkpoint 减少快照开销，用状态 TTL 清理过期状态，再加合理并行度分散状态。核心是别让状态无限膨胀。

# 追问

- 状态太大有哪些风险？
