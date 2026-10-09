---
id: SPARK-0078
type: technical
question: RDD的创建方式有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

并行化集合、读外部存储、从其他 RDD 转换。

# 参考回答

创建方式主要有三种：用 parallelize 把本地集合并行化，从 HDFS、Hive 等外部数据源读，还有从其他 RDD 转换出来。日常最多是读数据源。

# 追问

- parallelize 适合什么场景？
