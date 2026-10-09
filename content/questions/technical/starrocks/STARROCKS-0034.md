---
id: STARROCKS-0034
type: technical
question: 什么是流式导入？StarRocks 如何支持实时数据导入？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Routine Load 或 Flink 从 Kafka 持续消费实时写入。

# 参考回答

流式导入主要通过 Routine Load 订阅 Kafka，持续消费数据写入，配合主键模型做 upsert 更新。也常用 Flink Connector 直接把实时数据写进 StarRocks。这样就支撑实时数仓和实时大屏。

# 追问

- Routine Load 的消费位点怎么管理？
