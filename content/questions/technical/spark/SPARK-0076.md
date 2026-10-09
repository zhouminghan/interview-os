---
id: SPARK-0076
type: technical
question: 什么是RDD？它的主要特点是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RDD 是弹性分布式数据集，不可变、可分片、可重算。

# 参考回答

RDD 是 Spark 最核心的抽象，一个不可变、分区的数据集合。特点是弹性能容错、分布式存多节点、不可变保证线程安全、靠血缘重算。是 Spark 早期的主编程模型。

# 追问

- RDD 的弹性体现在哪？
