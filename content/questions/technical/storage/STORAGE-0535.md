---
id: STORAGE-0535
type: technical
question: 解释Clickhouse的磁盘I/O优化策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SSD、压缩、减少扫描。

# 参考回答

磁盘 IO 优化用 SSD、压缩减少读写、分区排序减少扫描、加大缓存。IO 是 ClickHouse 常见瓶颈，读得少就快。

# 追问

- IO 瓶颈怎么判断？
