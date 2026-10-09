---
id: STARROCKS-0125
type: technical
question: StarRocks 如何支持实时数据分析？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠 Routine Load、Flink 实时导入加主键模型做实时分析。

# 参考回答

实时分析靠实时导入，Routine Load 订阅 Kafka 或 Flink 写入，配合主键模型 upsert，秒级可见。常用于实时大屏、实时监控、实时对账。

# 追问

- 实时和离线怎么保证口径一致？
