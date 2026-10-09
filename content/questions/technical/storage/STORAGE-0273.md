---
id: STORAGE-0273
type: technical
question: 解释HBase中的数据备份恢复机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

快照、复制、导出做备份。

# 参考回答

备份靠 Snapshot 快照、Replication 复制、Export 导出。恢复从快照重建表或从副本还原。多副本和 WAL 保证单点故障不丢数据。

# 追问

- 灾备怎么做？
