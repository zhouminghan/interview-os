---
id: STORAGE-0430
type: technical
question: Clickhouse的数据分片机制是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按分片键把数据分到不同节点。

# 参考回答

ClickHouse 分片把数据按分片键分布到多个节点，查询时并行聚合。Distributed 表做分发。分片加副本实现横向扩展和高可用。

# 追问

- 分片和副本区别？
