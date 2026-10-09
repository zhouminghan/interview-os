---
id: STORAGE-0622
type: technical
question: 解释Clickhouse的存储策略配置。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配置存储卷做冷热分层。

# 参考回答

存储策略配置多个存储卷，热数据 SSD、冷数据 HDD，TTL 迁移。实现冷热分离，省成本保性能。

# 追问

- 存储策略怎么配？
