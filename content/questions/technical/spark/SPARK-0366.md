---
id: SPARK-0366
type: technical
question: 什么是 RDD 血缘（Lineage）？
difficulty: 0
topic: []
source_type: knowledge
---

RDD 血缘记录了一个 RDD 如何从其他 RDD 转换而来。Spark 通过保留每个 RDD 的计算信息（如何从其他数据集创建、操作历史 + 父 RDD），在发生分区丢失时使用血缘重算数据而非复制，节省系统资源。
