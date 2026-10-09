---
id: STORAGE-0332
type: technical
question: HBase的Compaction调优策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制触发时机和并发。

# 参考回答

Compaction 调优控制触发文件数和大小、并发数、高峰期限流。避免 compact 抢 IO 影响读写。Major compact 错峰执行。

# 追问

- compact 影响查询吗？
