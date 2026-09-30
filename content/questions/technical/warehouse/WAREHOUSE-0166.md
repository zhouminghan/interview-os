---
id: WAREHOUSE-0166
type: technical
question: 星型模型 vs 雪花模型：各自的取舍是什么？
difficulty: 0
topic: []
source_type: knowledge
---

雪花模型将维度规范化为多个关联表。它能减少冗余、提升维度的可维护性，但会增加连接的复杂度，并可能损害性能。**星型模型**通常更适合 BI 和即席分析，因为对用户和工具更友好。

---
