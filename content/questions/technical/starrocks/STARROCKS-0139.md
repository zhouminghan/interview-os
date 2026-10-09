---
id: STARROCKS-0139
type: technical
question: StarRocks 的资源隔离是如何实现的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用资源组按用户或查询类型分配资源。

# 参考回答

资源隔离靠资源组实现，把不同业务或用户的查询分到不同组，每组限制 CPU、内存、并发。避免一个业务的慢查询拖垮其他业务。

# 追问

- 资源组怎么划分比较合理？
