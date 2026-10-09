---
id: STORAGE-0309
type: technical
question: 详细描述HBase的快照实现机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

快照记录文件引用，不复制数据。

# 参考回答

快照记录表当时的所有 HFile 引用和元数据，不实际复制数据。数据删除时快照引用的文件保留。恢复或克隆从快照重建。

# 追问

- 快照占空间吗？
