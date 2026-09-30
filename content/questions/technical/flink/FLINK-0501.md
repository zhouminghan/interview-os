---
id: FLINK-0501
type: technical
question: Flink 和 Spark Streaming 有什么区别？
difficulty: 0
topic: []
source_type: knowledge
---

1. **设计思想不同**：Flink 认为批是一种流，Spark 认为流是一种批。
2. **架构模型不同**：Spark 有 Driver、Master、Worker、Executor；Flink 有 TaskManager、JobManager、Task、SubTask、Slot 等概念。
3. **流处理能力**：Flink 的流数据处理比 Spark 强得多，例如时间支持三种时间语义，窗口也比 Spark 更多。
4. **乱序数据处理**：在乱序数据情况下，Flink 比 Spark 更强，因为 Flink 有 Watermark。实际上，运行时的计算方式是：当 Watermark 大于窗口结束时，才执行计算。
5. **容错机制**：Flink 的容错也比 Spark 更好。例如，Flink 支持两阶段提交，确保程序崩溃后的数据不会被重复消费。Spark 也有 Checkpoint，但它只保证数据不丢失，不能保证不重复消费。

---
