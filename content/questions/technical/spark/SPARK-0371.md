---
id: SPARK-0371
type: technical
question: 如何从缓存中移除数据？
difficulty: 0
topic: []
source_type: knowledge
---

- `RDD.unpersist()`：手动从缓存中移除
- Spark 使用 LRU 算法在内存不足时自动移除旧的缓存数据
