---
id: FLINK-0318
type: technical
question: 解释FlinkSQL中的内存管理机制及如何调优。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

堆内存加托管内存，按状态和计算需求调。

# 参考回答

SQL 作业内存分堆内存和托管内存，托管内存给 RocksDB 和排序。状态大就多给托管内存，计算重就多给堆。避免 OOM 和频繁 GC。

# 追问

- 托管内存和堆内存怎么分配？
