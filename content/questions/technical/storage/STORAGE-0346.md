---
id: STORAGE-0346
type: technical
question: 详细解释HBase的缓存优化策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

读缓存 BlockCache，写缓存 MemStore。

# 参考回答

缓存优化读多加大 BlockCache 并用堆外，写多调 MemStore。按读写比例分配内存。命中率高读写都快。

# 追问

- 缓存怎么配？
