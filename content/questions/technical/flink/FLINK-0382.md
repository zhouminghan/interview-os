---
id: FLINK-0382
type: technical
question: 如何优化FlinkSQL中的大状态作业性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 RocksDB、状态 TTL、增量 checkpoint。

# 参考回答

大状态作业用 RocksDB 存状态、配状态 TTL 清理、增量 checkpoint 减少快照开销，合理并行度分散状态。状态访问慢就调 RocksDB 缓存。

# 追问

- 状态大对 checkpoint 有什么影响？
