---
id: SPARK-0196
type: technical
question: Spark性能优化的主要方面有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

资源、并行度、shuffle、序列化、内存、数据倾斜几个方面。

# 参考回答

优化主要从几个方面：资源配置、并行度、shuffle、序列化、内存和 GC、数据倾斜、存储格式。先定位瓶颈再针对优化。

# 追问

- 优化第一步是什么？
