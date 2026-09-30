---
id: SPARK-0368
type: technical
question: cache() 和 persist() 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

- `cache()`：使用默认存储级别 `MEMORY_ONLY` 存储 RDD
- `persist()`：可以指定不同的存储级别（如 MEMORY_ONLY、MEMORY_AND_DISK 等）
