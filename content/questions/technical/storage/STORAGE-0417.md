---
id: STORAGE-0417
type: technical
question: 如何设计HBase的灾难恢复方案？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

跨集群复制加快照备份。

# 参考回答

灾难恢复用 Replication 跨集群同步，加定期快照备份。主集群故障切灾备，恢复数据。定期演练，保证 RTO 和 RPO 达标。

# 追问

- RTO RPO 怎么定？
