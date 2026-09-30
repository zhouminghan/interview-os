---
id: SPARK-0337
type: technical
question: 海量小文件问题成因与根治方案？（完整版）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：高频写入 | 动态分区 | 合并策略 | 定期compaction | 调参控制
> **来源**：字节-AI Agent数据开发-20260420 Q26

小文件问题成因主要几种：一是动态分区写入时每个 Reduce 任务可能为每个分区各生成一个小文件；二是 Flink 实时写入 Iceberg 时每个 checkpoint 间隔都生成新文件；三是任务多次重跑产生冗余文件。

**事前预防**：控制 Reduce 任务数量，合理设置 shuffle partition 数；写入前先 repartition 到合理的分区数；Hive 开启合并小文件参数（`hive.merge.mapfiles`、`hive.merge.mapredfiles`）。

**事后治理**：定期执行小文件合并任务，把多个小文件合并成大文件；Iceberg/Hudi 支持 compaction 操作，定期触发合并；HDFS 层面可以用 HAR（Hadoop Archive）做归档。

**调参控制**：设置文件大小合理阈值（如 128MB/256MB），写入时自动合并到目标大小。

---
