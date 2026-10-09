---
id: FLINK-0117
type: technical
question: 如何优化Flink的检查点性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

增量 checkpoint、合理间隔、减少状态。

# 参考回答

checkpoint 优化用 RocksDB 增量 checkpoint，合理间隔，减少状态大小和快照耗时。别太频繁，也别间隔太长。

# 追问

- checkpoint 太频繁有什么影响？
