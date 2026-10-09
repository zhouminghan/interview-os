---
id: SPARK-0086
type: technical
question: 如何自定义RDD的分区器？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

继承 Partitioner，自定义 numPartitions 和 getPartition。

# 参考回答

自定义分区器就是继承 Partitioner，实现分区数和 getPartition 方法，按自己的规则把 key 分到指定分区。用于解决默认 hash 不均导致的数据倾斜。

# 追问

- 自定义分区器解决什么问题？
