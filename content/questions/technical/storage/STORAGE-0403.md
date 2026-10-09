---
id: STORAGE-0403
type: technical
question: 在生产环境中如何实现HBase的多租户？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

NameSpace 分租户加配额。

# 参考回答

多租户用 NameSpace 分租户，每个租户自己的表，配配额和权限。资源隔离靠 Region 配额和 RPC 限流。轻量共享，重要独享。

# 追问

- 多租户怎么隔离？
