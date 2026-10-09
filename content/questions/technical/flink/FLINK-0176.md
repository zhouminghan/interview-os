---
id: FLINK-0176
type: technical
question: Flink的内存管理模型是怎样的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

堆内存加托管内存加 off-heap，统一管理。

# 参考回答

Flink 内存分堆内存、托管内存、网络缓冲和 off-heap。托管内存给 RocksDB 和批处理算子，用 MemorySegment 管理，减少 GC 和对象开销。

# 追问

- 托管内存的用途？
