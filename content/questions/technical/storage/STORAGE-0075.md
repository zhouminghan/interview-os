---
id: STORAGE-0075
type: technical
question: Hive中的查询结果缓存是如何实现的？请详细说明结果缓存的原理、配置方法、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

结果缓存靠 LLAP 或物化视图实现。

# 参考回答

查询结果缓存主要靠 LLAP 的内存缓存，或把结果物化成表。适合反复查的小结果集。Hive 默认不缓存结果，批处理一次算完。

# 追问

- LLAP 是什么？
