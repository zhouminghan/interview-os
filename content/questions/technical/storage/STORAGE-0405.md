---
id: STORAGE-0405
type: technical
question: 如何设计HBase的数据归档方案？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

冷热分离，冷数据归档。

# 参考回答

数据归档把冷数据从热表迁到归档存储，或建历史表。热表只留近期数据。归档用快照或导出。降低热表存储和查询压力。

# 追问

- 冷热怎么分？
