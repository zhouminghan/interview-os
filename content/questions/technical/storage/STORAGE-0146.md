---
id: STORAGE-0146
type: technical
question: 什么是Hive的查询缓存？请详细说明查询缓存的配置方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 缓存弱，靠 LLAP 或物化视图。

# 参考回答

Hive 本身查询缓存能力有限，LLAP 能缓存热数据，物化视图缓存结果。适合高频小结果集。批处理场景一般不依赖缓存。

# 追问

- LLAP 缓存原理？
