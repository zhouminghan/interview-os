---
id: SPARK-0084
type: technical
question: 什么是RDD的血统（Lineage）？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

血统记录 RDD 的转换链条，用于容错重算。

# 参考回答

血统就是 RDD 从父 RDD 一步步转换来的关系链。某个分区数据丢了，就根据血统从最近的父 RDD 重新算，不用从头再来。这是 Spark 容错的基础。

# 追问

- 血统太长会怎样？
