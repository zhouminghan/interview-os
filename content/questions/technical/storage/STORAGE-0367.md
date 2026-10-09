---
id: STORAGE-0367
type: technical
question: 详细讲解HBase的Region迁移优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

错峰迁移，减少对业务影响。

# 参考回答

Region 迁移优化错峰执行，避免高峰期迁移影响读写。迁移会短暂不可用，控制迁移并发。均衡器和手动迁移配合。

# 追问

- 迁移会中断吗？
