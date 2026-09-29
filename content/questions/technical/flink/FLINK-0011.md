---
id: FLINK-0011
type: technical
question: 离线数仓和实时数仓数据对不上怎么排查
topic: [flink, consistency]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

先看实时任务背压/Kafka 消费延迟，再核对窗口触发逻辑和事件时间 vs 处理时间语义。

# 30 秒回答

排查：实时任务是否背压、Kafka 消费延迟、离线 Spark 与实时 Flink 的窗口触发逻辑是否一致、事件时间和处理时间语义是否对齐。

# 追问

- 事件时间和处理时间差在哪？
- 数据迟到怎么处理？
