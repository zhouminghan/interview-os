---
id: STORAGE-0596
type: technical
question: Clickhouse的跨地域部署方案是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

跨地域副本或双集群同步。

# 参考回答

跨地域部署用跨机房副本，或双集群加数据同步。注意网络延迟。适合灾备和就近访问。成本高，按需选。

# 追问

- 跨地域怎么做？
