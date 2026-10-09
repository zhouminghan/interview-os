---
id: STORAGE-0350
type: technical
question: HBase的Region分裂优化策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

预分区减少自动分裂，调分裂阈值。

# 参考回答

Region 分裂优化靠预分区减少初期分裂，调分裂阈值避免频繁分裂。分裂会短暂影响读写，错峰更好。控制 Region 数量。

# 追问

- 分裂影响大吗？
