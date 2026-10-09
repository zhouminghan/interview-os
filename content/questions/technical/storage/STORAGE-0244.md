---
id: STORAGE-0244
type: technical
question: HBase中的快照(Snapshot)功能是什么？使用场景是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

快照快速备份表，不复制数据。

# 参考回答

Snapshot 记录表的元数据和文件引用，快速创建一致性备份，不实际复制数据。用于备份、迁移、克隆表。恢复很快。

# 追问

- 快照和复制备份区别？
