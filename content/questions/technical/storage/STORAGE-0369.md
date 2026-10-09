---
id: STORAGE-0369
type: technical
question: 如何优化HBase的数据同步性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

复制批量、控制延迟。

# 参考回答

数据同步用 Replication 优化批量推送、减少网络开销，监控同步延迟。跨集群同步用快照加增量。延迟和吞吐权衡。

# 追问

- 同步延迟怎么看？
