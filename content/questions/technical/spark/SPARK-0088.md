---
id: SPARK-0088
type: technical
question: 什么是RDD的checkpoint？它与cache的区别是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

cache 存内存不截断血缘，checkpoint 落可靠存储截断血缘。

# 参考回答

cache 是放内存或本地磁盘加速，血缘还在，数据丢了重算；checkpoint 是写到 HDFS 这类可靠存储，截断血缘，恢复直接读盘。checkpoint 用于长血缘防栈溢出，cache 用于复用加速。

# 追问

- 什么时候必须用 checkpoint？
