---
id: FLINK-0112
type: technical
question: 如何优化Flink的内存配置？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理分配堆、托管内存和 off-heap。

# 参考回答

Flink 内存分堆内存、托管内存和 off-heap。托管内存给状态和 RocksDB，要按状态大小配够。避免 OOM 和频繁 GC。

# 追问

- 托管内存是什么？
