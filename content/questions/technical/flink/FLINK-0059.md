---
id: FLINK-0059
type: technical
question: 什么是增量式检查点（Incremental Checkpoint）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

只备份变化的部分，RocksDB 支持。

# 参考回答

增量检查点只把新增或变化的状态写出去，不全量快照。RocksDB 状态后端支持，大幅减少 checkpoint 的 IO 和时间，适合超大状态。

# 追问

- 增量 checkpoint 有什么好处？
