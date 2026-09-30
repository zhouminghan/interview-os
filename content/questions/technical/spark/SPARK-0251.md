---
id: SPARK-0251
type: technical
question: 如何监控 Apache Spark？
difficulty: 0
topic: []
source_type: knowledge
---

可以使用 SparkContext 提供的 **Web UI** 来监控 Spark，在端口 4040 访问，获取有用信息，包括：
- 调度器任务和阶段、RDD 大小、内存使用
- Spark 环境信息
- 执行器（Executor）信息

Spark 还提供一个**指标库**，可以将 Spark 信息发送到 HTTP、JMX、CSV 文件等，这是收集 Spark 运行时信息以在其他仪表盘中监控的选项。

---
