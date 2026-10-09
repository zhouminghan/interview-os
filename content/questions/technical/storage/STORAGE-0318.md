---
id: STORAGE-0318
type: technical
question: HBase的TTL实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TTL 按时间戳判断过期。

# 参考回答

TTL 给列族设存活时间，数据写入时间超过 TTL 就过期，读时过滤，compact 时清理。控制数据生命周期，省存储。

# 追问

- 过期数据什么时候删？
