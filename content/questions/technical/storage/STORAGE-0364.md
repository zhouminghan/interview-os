---
id: STORAGE-0364
type: technical
question: 详细解释HBase的多租户优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

NameSpace 加配额隔离。

# 参考回答

多租户优化用 NameSpace 分租户，配 Region 和 RPC 配额，按租户限流隔离。重要租户单独资源。避免互相影响。

# 追问

- 租户怎么限流？
