---
id: FLINK-0389
type: technical
question: 解释一个实际案例：如何优化FlinkSQL大状态后端性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 RocksDB、调缓存、增量 checkpoint。

# 参考回答

大状态后端优化用 RocksDB，调块缓存和写缓冲，配增量 checkpoint 减少快照，用状态 TTL 清理。状态访问慢就加大缓存。

# 追问

- RocksDB 状态怎么调优？
