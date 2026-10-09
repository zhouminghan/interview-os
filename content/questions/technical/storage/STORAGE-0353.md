---
id: STORAGE-0353
type: technical
question: HBase的IO性能如何优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SSD、缓存、减少扫描。

# 参考回答

IO 优化用 SSD、加大 BlockCache 减少磁盘读、Bloom Filter 减少无效读、压缩减少 IO 量。IO 是 HBase 常见瓶颈。

# 追问

- IO 瓶颈怎么判断？
