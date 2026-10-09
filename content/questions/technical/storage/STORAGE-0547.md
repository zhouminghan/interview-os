---
id: STORAGE-0547
type: technical
question: Clickhouse的内存溢出问题如何解决？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

限制内存、聚合落盘、优化查询。

# 参考回答

内存溢出限制单查询内存、聚合超限落盘、优化大聚合和 join。加大内存或减少并发。定位是哪个查询 OOM。

# 追问

- OOM 怎么解决？
