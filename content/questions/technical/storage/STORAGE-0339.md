---
id: STORAGE-0339
type: technical
question: 如何优化HBase的过滤器性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤器放服务端，尽早过滤。

# 参考回答

过滤器在服务端执行减少传输，组合过滤器时把过滤性强的放前面。行键过滤比列值过滤高效。减少返回的数据。

# 追问

- 过滤器顺序重要吗？
