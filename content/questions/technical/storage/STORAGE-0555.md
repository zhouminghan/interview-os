---
id: STORAGE-0555
type: technical
question: Clickhouse的并发控制机制是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

限制并发查询数。

# 参考回答

并发控制用 max_concurrent_queries 限制同时执行的查询数，防止资源打满。配合优先级和资源限制。

# 追问

- 并发怎么控？
