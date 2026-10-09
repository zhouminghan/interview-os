---
id: STORAGE-0597
type: technical
question: 如何处理Clickhouse的历史数据归档？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TTL 移到冷存储归档。

# 参考回答

历史数据归档用 TTL 移到冷存储卷或外部存储，热表只留近期数据。省成本和提升热查询性能。

# 追问

- 归档怎么做？
