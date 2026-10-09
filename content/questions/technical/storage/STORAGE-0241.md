---
id: STORAGE-0241
type: technical
question: 解释HBase中的Compaction策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Minor 和 Major 两种 Compaction。

# 参考回答

Minor Compaction 合并相邻的小 HFile，快但不去重删除数据；Major Compaction 合并所有 HFile，清理过期和删除数据，开销大。按策略定期触发。

# 追问

- Major 为什么开销大？
