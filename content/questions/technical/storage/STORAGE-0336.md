---
id: STORAGE-0336
type: technical
question: 如何优化HBase的Region大小？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Region 大小适中，别太大太小。

# 参考回答

Region 太小 Region 数多、元数据大；太大 split 和 compact 重。一般几 GB 到十几 GB。按数据和负载调 Region 大小阈值。

# 追问

- Region 多大合适？
