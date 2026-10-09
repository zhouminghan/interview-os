---
id: STORAGE-0435
type: technical
question: 解释Clickhouse的MVCC机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ClickHouse 用数据块版本实现并发。

# 参考回答

ClickHouse 的 MVCC 靠数据块版本和不可变数据，读操作看到一致快照，写操作创建新块。并发读不阻塞，写合并后台做。

# 追问

- MVCC 怎么实现？
