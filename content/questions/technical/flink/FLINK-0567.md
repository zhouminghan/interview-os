---
id: FLINK-0567
type: technical
question: 如何维护 Checkpoint？
difficulty: 0
topic: []
source_type: knowledge
---

默认情况下，如果设置了 Checkpoint 选项，Flink 只保留最近生成的 1 个 Checkpoint。当 Flink 程序故障时，从最近的 Checkpoint 恢复。但是，如果我们想保留多个 Checkpoint，并可以根据实际需要选择其中一个进行恢复，这样更灵活。Flink 支持保留多个 Checkpoint，需要在 Flink 配置文件 `conf/flink-conf.yaml` 中添加以下配置来指定最多的 Checkpoint 数量。

---
