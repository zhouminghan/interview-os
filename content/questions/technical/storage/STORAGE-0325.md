---
id: STORAGE-0325
type: technical
question: 如何优化HBase的RowKey设计？请给出具体的设计原则和案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

短、均匀、贴合查询。

# 参考回答

RowKey 要短省存储、均匀避免热点、按查询设计。比如用户维度用 hash(userId)+userId，时序用反转时间戳。设计前想清楚查询模式。

# 追问

- 反转时间戳为什么？
