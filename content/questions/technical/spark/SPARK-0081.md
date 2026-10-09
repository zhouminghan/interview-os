---
id: SPARK-0081
type: technical
question: RDD的持久化级别有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

内存、磁盘、序列化、副本的各种组合。

# 参考回答

持久化级别有 MEMORY_ONLY、MEMORY_AND_DISK、DISK_ONLY，加上 SER 序列化变体、再带 _2 副本的变体。默认 cache 是 MEMORY_ONLY。按内存和重算成本选。

# 追问

- MEMORY_AND_DISK 和 MEMORY_ONLY 怎么选？
