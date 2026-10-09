---
id: STORAGE-0595
type: technical
question: 如何优化Clickhouse的分布式JOIN？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

小表广播，避免大表跨节点 join。

# 参考回答

分布式 JOIN 优化小表广播到各节点，大表 join 尽量本地完成。ClickHouse join 弱，分布式 join 更弱，先预聚合。

# 追问

- 分布式 join 怎么优化？
