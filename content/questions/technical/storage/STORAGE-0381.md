---
id: STORAGE-0381
type: technical
question: 如何设计HBase的备份恢复方案？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

快照备份加复制灾备。

# 参考回答

备份方案用快照定期备份，跨集群复制做灾备，元数据也备份。恢复从快照重建或从灾备切换。定期演练恢复。

# 追问

- 备份频率怎么定？
