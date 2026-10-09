---
id: STORAGE-0144
type: technical
question: 什么是Hive的缓存机制？请详细说明缓存的类型、配置方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 缓存有限，靠 LLAP 或物化。

# 参考回答

Hive 本身缓存弱，LLAP 能缓存热数据，物化视图缓存结果。适合高频小结果集。批处理一般不需要缓存。

# 追问

- LLAP 缓存什么？
