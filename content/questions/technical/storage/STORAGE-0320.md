---
id: STORAGE-0320
type: technical
question: HBase的多租户实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 NameSpace 和配额做隔离。

# 参考回答

多租户用 NameSpace 分租户，配表和 Region 配额，权限按 NameSpace 隔离。实现资源和使用隔离。RPC 也支持按租户限流。

# 追问

- 多租户怎么隔离？
