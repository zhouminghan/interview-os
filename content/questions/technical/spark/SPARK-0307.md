---
id: SPARK-0307
type: technical
question: 推测执行（Speculative Execution）？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 中的**推测任务**是运行速度比作业中其余任务慢的任务。它是一个健康检查过程，验证任务是否被推测——即运行速度比任务表中成功完成的任务的中位数慢。此类任务被提交到另一个工作节点，并行运行新副本，而不是关闭慢速任务。

在集群部署模式中，线程在 `spark.speculation` 启用时启动（作为 `TaskSchedulerImpl`）。它每隔 `spark.speculation.interval` 周期性执行，在初始 `spark.speculation.interval` 过去后执行。
