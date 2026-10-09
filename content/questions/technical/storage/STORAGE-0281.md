---
id: STORAGE-0281
type: technical
question: 详细解释HBase的Region分裂过程。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Region 大了按 RowKey 中点分裂。

# 参考回答

Region 数据量到阈值，找到 RowKey 中点，分裂成两个子 Region，父 Region 下线，子 Region 重新分配。分裂过程对读短暂影响，是 HBase 扩容的机制。

# 追问

- 分裂会阻塞吗？
