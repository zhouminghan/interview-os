---
id: STORAGE-0401
type: technical
question: 分享一个HBase的资源隔离实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

NameSpace 配额加 RPC 限流。

# 参考回答

资源隔离用 NameSpace 分租户，配 Region 和表配额，RPC 按租户限流。不同业务分开，避免互相影响。重要业务独立资源。

# 追问

- 隔离怎么配？
