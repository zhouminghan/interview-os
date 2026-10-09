---
id: STORAGE-0328
type: technical
question: 详细解释HBase的内存优化策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理分配堆、BlockCache、MemStore。

# 参考回答

内存优化合理分配堆给 BlockCache 和 MemStore，读多给缓存，写多给 MemStore。避免堆太小 OOM 或太大 GC 长。按读写比例调。

# 追问

- 内存怎么分配？
