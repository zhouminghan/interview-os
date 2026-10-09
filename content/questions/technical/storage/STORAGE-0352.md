---
id: STORAGE-0352
type: technical
question: 详细解释HBase的内存管理优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

堆、缓存、MemStore 合理分配。

# 参考回答

内存管理分堆内存、BlockCache、MemStore，按读写比例分配。堆外给 BucketCache。避免 OOM 和频繁 GC。

# 追问

- 内存怎么分？
