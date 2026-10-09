---
id: STORAGE-0525
type: technical
question: 如何选择Clickhouse表的分区键？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

选高频过滤字段，一般是时间。

# 参考回答

分区键选查询最常过滤的字段，通常时间。粒度别太细，按月或天。分区让查询只扫相关分区，也是 TTL 的基础。

# 追问

- 分区键怎么选？
