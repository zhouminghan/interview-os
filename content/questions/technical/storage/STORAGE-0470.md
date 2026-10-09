---
id: STORAGE-0470
type: technical
question: Clickhouse如何实现数据的冷热分离？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TTL 把冷数据移到冷存储。

# 参考回答

冷热分离用 TTL 把老数据移到冷存储卷，或归档到外部存储。热数据放 SSD，冷数据放 HDD 或对象存储。省成本。

# 追问

- 冷热分离怎么做？
