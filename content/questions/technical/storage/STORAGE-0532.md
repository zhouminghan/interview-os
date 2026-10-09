---
id: STORAGE-0532
type: technical
question: 如何配置Clickhouse的并行查询数？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制查询并发和线程。

# 参考回答

并行查询配置 max_concurrent_queries 限制并发查询数，max_threads 控制单查询线程。按 CPU 核数配，别超太多。

# 追问

- 并发怎么配？
