---
id: SPARK-0197
type: technical
question: 如何优化Spark的内存使用？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调执行存储内存比例、off-heap、避免 OOM。

# 参考回答

内存优化调 spark.memory.fraction 控制执行存储比例，用 off-heap 存大对象，合理缓存级别，避免大对象和 OOM。内存够用是性能前提。

# 追问

- 执行内存和存储内存怎么权衡？
