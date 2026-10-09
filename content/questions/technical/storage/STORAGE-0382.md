---
id: STORAGE-0382
type: technical
question: 在实际项目中如何实现HBase的数据同步？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Replication 或 CDC 同步。

# 参考回答

数据同步用 HBase Replication 跨集群同步，或用 CDC 工具同步到下游。按延迟和一致性要求选。监控同步进度。

# 追问

- 同步延迟怎么办？
