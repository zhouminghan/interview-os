---
id: STORAGE-0365
type: technical
question: HBase的资源隔离如何优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

NameSpace 配额和 RPC 隔离。

# 参考回答

资源隔离用 NameSpace 配额限制表数和 Region 数，RPC 按用户或租户限流。隔离读写资源，避免一个业务拖垮集群。

# 追问

- 隔离怎么配？
