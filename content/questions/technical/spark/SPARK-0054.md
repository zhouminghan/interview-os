---
id: SPARK-0054
type: technical
question: Spark的内存管理机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

> **来源面经**：扬腾创新-数据开发一面-20261013

# 一句话

内存分执行和存储两块，统一管理加动态调整。

# 参考回答

Spark 内存主要分执行内存和存储内存，执行内存用于 shuffle 和聚合，存储内存用于缓存 RDD。采用统一内存管理，两者可以动态借用，提高利用率。

# 追问

- 执行内存和存储内存怎么分配？
