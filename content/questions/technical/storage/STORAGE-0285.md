---
id: STORAGE-0285
type: technical
question: 详细描述HBase的Compaction过程和策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合并 HFile，清理过期数据。

# 参考回答

Compaction 合并多个 HFile 成更大的，Minor 合并相邻小文件，Major 合并全部并清理删除和过期数据。策略按文件数和大小触发。

# 追问

- Minor 和 Major 区别？
