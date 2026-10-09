---
id: STORAGE-0455
type: technical
question: 什么是Clickhouse的TTL（生存时间）？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数据过期自动删除或归档。

# 参考回答

ClickHouse TTL 给表或列设生存时间，到期自动删除或移到冷存储。适合时序和日志数据，控制存储。后台任务执行 TTL。

# 追问

- TTL 怎么配？
