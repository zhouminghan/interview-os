---
id: STORAGE-0340
type: technical
question: 详细解释HBase的协处理器性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

协处理器逻辑要轻，别阻塞。

# 参考回答

协处理器在服务端跑，逻辑要轻量，别做重 IO 和慢调用，否则拖慢整个 Region。能用过滤器就别用协处理器。谨慎使用。

# 追问

- 协处理器为什么慎用？
