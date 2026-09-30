---
id: FLINK-0549
type: technical
question: Flink 如何确保精确一次消费？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 有两种方式确保精确一次消费（Exactly-Once）：

1. **Checkpoint 机制**：主要当 Flink 开启 Checkpoint 时，会在 Source 端插入一个 barrier，然后这个 barrier 随着数据一直流动。当到达一个算子时，该算子开始做 Checkpoint——在 barrier 到来时将该算子的当前状态写入状态后端。然后 barrier 继续向下流动，当流到 keyBy 或 shuffle 算子时（例如一个算子的数据来自多个流），会有 barrier 对齐，即所有 barrier 都到达这个算子后才做 Checkpoint，依次流动。当流到 Sink 算子时，Sink 算子也完成 Checkpoint，会向 JobManager 报告 Checkpoint 生产完成。

2. **两阶段提交机制**：Flink 提供 `CheckpointedFunction` 和 `CheckpointListener` 两个接口。`CheckpointedFunction` 有 `snapshotState` 方法，每次 Checkpoint 触发时执行该方法，通常将缓存数据放入 State，可以视作一个 hook，此方法可用于实现预提交。`CheckpointListener` 有 `notifyCheckpointComplete` 方法，Checkpoint 完成后的通知方法，可以在这里做一些额外的操作。例如 `FlinkKafkaConsumerBase` 用它来做 Kafka offset 的提交。在此方法中，可以实现提交操作。在 2PC 中，如果对应的 Checkpoint 失败，会回滚，不影响数据一致性。所以如果 Checkpoint 成功后失败，会在 `initializeState` 方法中完成事务提交，这确保了数据一致性，主要基于 Checkpoint 的状态文件来判断。

---
