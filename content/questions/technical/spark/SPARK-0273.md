---
id: SPARK-0273
type: technical
question: cache() 和 persist() 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

`cache()` 和 `persist()` 函数都用于跨操作将 RDD 持久化在内存中。两者的关键区别在于：`persist()` 可以指定选择的存储级别，而 `cache()` 使用默认策略进行持久化，默认存储策略是 `MEMORY_ONLY`。

---
