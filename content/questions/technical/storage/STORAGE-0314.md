---
id: STORAGE-0314
type: technical
question: HBase的客户端API实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

客户端通过 RPC 和服务端交互。

# 参考回答

客户端 API 底层通过 RPC 和 RegionServer 交互，Connection 管理连接和缓存。get、put、scan 都转成 RPC 请求。连接是重量级对象要复用。

# 追问

- API 是同步还是异步？
