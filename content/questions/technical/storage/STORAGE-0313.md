---
id: STORAGE-0313
type: technical
question: 详细描述HBase的数据备份实现机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

快照、复制、导出三种备份。

# 参考回答

备份机制：快照快速备份表，复制把 WAL 推送到备集群，导出把数据写成文件。恢复从快照重建或从副本还原。多副本也保证单点故障不丢。

# 追问

- 三种备份怎么选？
