---
id: SPARK-0284
type: technical
question: Spark 中的 Checkpoint 机制？
difficulty: 0
topic: []
source_type: knowledge
---

在 Spark Streaming 中，有 **Checkpointing** 的概念，用于增加应用的弹性。在故障情况下，流应用需要检查点来恢复。Spark 提供两种类型的 Checkpointing：
- **元数据检查点**：元数据是定义流应用的配置信息和其他信息，可以创建元数据检查点，使节点能够在运行 Driver 应用时从故障中恢复。元数据包括配置、DStream 操作和未完成的批次等。
- **数据检查点**：在此检查点中，将 RDD 保存到可靠存储中，这在有状态转换中很有用，生成的 RDD 依赖于前一批次的 RDD。在某些情况下，可能有很长的 RDD 链，为避免恢复时间过长，更容易在数据检查点中创建带有中间步骤 RDD 的检查点。

---
