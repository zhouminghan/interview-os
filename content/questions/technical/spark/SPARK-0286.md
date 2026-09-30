---
id: SPARK-0286
type: technical
question: 什么是广播变量（Broadcast Variable）？
difficulty: 0
topic: []
source_type: knowledge
---

根据 Spark 官方文档："广播变量允许程序员将只读变量缓存在每台机器上，而不是随任务一起发送副本。" Spark 还可以使用高效的广播算法分发广播变量，以减少通信成本。在 Shuffle 操作中，需要公共数据，这些公共数据由 Spark 作为广播变量进行广播，这些变量中的数据在运行任务之前被序列化和反序列化。

可以使用 `SparkContext.broadcast(v)` 创建广播变量，建议在集群上运行函数时使用广播变量而不是原始变量。

---
