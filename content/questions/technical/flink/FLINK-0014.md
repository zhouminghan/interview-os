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

# 追问

- Checkpoint 和 Savepoint 区别？
- RocksDB 为什么适合大状态？
