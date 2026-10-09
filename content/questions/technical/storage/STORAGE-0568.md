---
id: STORAGE-0568
type: technical
question: 如何处理Clickhouse的磁盘I/O瓶颈？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SSD、缓存、减少扫描。

# 参考回答

磁盘 IO 瓶颈上 SSD、加大缓存、优化排序键减少扫描、压缩减少 IO 量。监控磁盘 IO 找瓶颈。合并错峰。

# 追问

- IO 瓶颈怎么处理？
