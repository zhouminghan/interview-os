---
id: STORAGE-0446
type: technical
question: Clickhouse的内存管理机制是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

限制单查询内存，防止 OOM。

# 参考回答

ClickHouse 内存管理限制单查询最大内存，超了抛异常或落盘。配置 max_memory_usage 等参数。聚合大查询要控制内存。

# 追问

- 内存超了怎么办？
