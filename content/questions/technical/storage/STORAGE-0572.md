---
id: STORAGE-0572
type: technical
question: 如何配置Clickhouse的连接池？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

复用连接，配置连接数。

# 参考回答

连接池配置最大连接数、超时。客户端复用连接避免频繁建连。并发高加大连接池。连接是资源要管好。

# 追问

- 连接池怎么配？
