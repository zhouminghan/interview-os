---
id: SPARK-0377
type: technical
question: 解释 Spark 的架构工作原理？
difficulty: 0
topic: []
source_type: knowledge
---

1. 第一步是通过解释器解释代码（如果使用 Scala 代码，则 Scala 解释器解释代码）。
2. 在 Spark 控制台中输入代码时，Spark 会创建算子图。
3. 在 Spark RDD 上调用行动时，算子图提交给 DAG Scheduler。
4. DAG Scheduler 将算子划分为任务阶段，阶段包含对输入数据的详细分步操作，算子然后被流水线化在一起。
5. 阶段然后传递给 Task Scheduler，后者通过集群管理器启动任务，以便在无阶段间依赖关系的情况下独立工作。
6. 工作节点然后执行任务。
