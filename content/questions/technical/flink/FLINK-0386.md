---
id: FLINK-0386
type: technical
question: 解释一个实际案例：如何优化FlinkSQL窗口聚合性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

增量聚合、合理窗口、状态 TTL。

# 参考回答

窗口聚合优化用增量聚合而不是全量，合理设窗口大小，窗口状态及时清理。大状态用 RocksDB，减少 checkpoint 开销。窗口太大状态会爆炸。

# 追问

- 窗口状态什么时候清理？
