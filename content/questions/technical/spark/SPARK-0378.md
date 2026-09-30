---
id: SPARK-0378
type: technical
question: DAG 在 Spark 中如何工作？
difficulty: 0
topic: []
source_type: knowledge
---

DAG（有向无环图）是一系列按特定序列连接的计算操作。每个顶点代表 RDD，每条边代表对 RDD 的转换。当在 RDD 上调用行动（Action）时，DAG 提交给 DAG Scheduler 执行。
