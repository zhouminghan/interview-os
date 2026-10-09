---
id: STARROCKS-0078
type: technical
question: StarRocks 的 IO 性能如何优化？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 SSD、合理分区减少扫描、控制 Compaction 时机。

# 参考回答

IO 优化一方面上 SSD、提高磁盘吞吐，另一方面从查询侧减少扫描量，靠分区裁剪、列裁剪、索引。还要控制 Compaction 别在高峰期抢 IO。

# 追问

- 怎么判断是 IO 瓶颈？
