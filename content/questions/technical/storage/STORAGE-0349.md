---
id: STORAGE-0349
type: technical
question: 详细讲解HBase的客户端优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

复用连接、批量、异步。

# 参考回答

客户端优化复用 Connection、批量操作、用异步 API、合理超时重试。连接是重量级对象别频繁建。客户端缓存也能加速。

# 追问

- 连接为什么复用？
