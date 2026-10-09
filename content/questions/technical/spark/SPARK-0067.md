---
id: SPARK-0067
type: technical
question: Spark的持久化机制有哪些？各有什么特点？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

cache 和 persist 按级别缓存到内存或磁盘。

# 参考回答

持久化用 cache 或 persist，级别有内存、磁盘、序列化、副本这些。默认 cache 就是内存。选级权衡内存和重算成本。

# 追问

- 持久化级别怎么选？
