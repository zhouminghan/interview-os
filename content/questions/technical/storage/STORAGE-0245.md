---
id: STORAGE-0245
type: technical
question: 解释HBase中的TTL(Time To Live)概念。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TTL 是数据过期时间，到期自动删。

# 参考回答

TTL 给列族设数据存活时间，到期数据自动过期，compact 时清理。适合有时效性的数据，比如临时数据、日志。控制存储增长。

# 追问

- TTL 数据什么时候真删？
