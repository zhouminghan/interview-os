---
id: STORAGE-0571
type: technical
question: Clickhouse的内存分配策略是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按需分配，限制上限。

# 参考回答

ClickHouse 内存按查询需要分配，配置上限防止 OOM。聚合内存大，可以落盘。内存分配用 jemalloc 优化。

# 追问

- 内存怎么管？
