---
id: STORAGE-0274
type: technical
question: HBase的客户端连接池如何配置和使用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

连接是重量级的，要复用。

# 参考回答

HBase 的 Connection 是重量级对象，要复用，不要每次建。连接池配置连接数和超时。客户端用单例 Connection，多个 Table 复用。

# 追问

- Connection 为什么要复用？
