---
id: FLINK-0645
type: technical
question: Flink 写入 Iceberg 表时，是用的流式写入还是批量写入？怎么保证原子性？
difficulty: 0
topic: []
source_type: knowledge
---

**流式写入**。Flink 通过 Iceberg 的 `FlinkSink` 以 streaming 模式持续写入。

**原子性保证**——基于 Iceberg 的乐观并发 + Flink Checkpoint：

1. Flink 每次 Checkpoint 成功时，触发 Iceberg 的 `commit` 操作
2. `commit` 是原子的：要么所有这批数据的文件全部可见，要么全不可见
3. 如果 CP 失败 → 不 commit → 已写入的数据文件不属于任何 snapshot，通过 Iceberg 的定期 `remove_orphan_files` 机制清理

**配置**：
```java
FlinkSink.forRowData(dataStream)
    .tableLoader(tableLoader)
    .overwrite(false)
    .distributionMode(DistributionMode.HASH)  // 按分区 hash 分发，减少小文件
    .flinkConf(flinkConf)
    .append();
```

`DistributionMode.HASH` 的作用：让同一个分区的数据都路由到同一个 Writer subtask，这样每个 subtask 写的文件更大，减少小文件。

---

## 四、离线层与一体化架构
