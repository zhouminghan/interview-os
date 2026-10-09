---
id: FLINK-0180
type: technical
question: Flink如何实现有状态计算的水平扩展？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

keyed state 按 key 分布，改并行度重分配。

# 参考回答

有状态的水平扩展靠 keyed state 按 key hash 分布，改并行度时从 savepoint 重分配状态。RocksDB 状态能支持更大规模。

# 追问

- 状态重分配怎么做？
