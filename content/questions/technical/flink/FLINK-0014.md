---
id: FLINK-0014
type: technical
question: Flink Checkpoint 缓存的是什么数据，状态后端有哪些
topic: [flink, checkpoint]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

Checkpoint 存算子状态（Operator State、Keyed State、Source offset）和元数据，不存原始消息。

# 30 秒回答

Keyed State（Value/List/Map、窗口聚合、join 状态）+ Operator State（Kafka offset）+ 元数据；后端有 Memory/Fs/RocksDB，生产用 RocksDB 支持大状态。

```diagram
type: flow
title: Checkpoint 状态与后端
direction: LR
nodes:
  - id: coord
    label: CheckpointCoordinator
    note: JobManager
    color: blue
  - id: task
    label: 算子状态
    note: Keyed / Operator / Source offset
  - id: backend
    label: 状态后端
    note: Memory / Fs / RocksDB
  - id: store
    label: 外部存储
    note: HDFS / 对象存储
    color: green
edges:
  - from: coord
    to: task
    label: 触发 barrier
  - from: task
    to: backend
    label: 快照
  - from: backend
    to: store
    label: 持久化
```

# 追问

- Checkpoint 和 Savepoint 区别？
- RocksDB 为什么适合大状态？
