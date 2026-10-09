---
id: STORAGE-0418
type: technical
question: 在实际项目中如何实现HBase的数据备份？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

快照备份加复制。

# 参考回答

数据备份用快照定期备份表，跨集群复制做实时同步。元数据也备份。备份存异地，定期验证可恢复。

# 追问

- 备份频率？
