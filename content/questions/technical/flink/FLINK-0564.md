---
id: FLINK-0564
type: technical
question: Flink 中数据有丢失的可能性吗？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 有三种数据消费语义：
- **At Most Once（最多一次）**：故障时可能丢失
- **At Least Once（至少一次）**：故障时可能重复
- **Exactly-Once（精确一次）**：出问题时也能确保数据不会丢失或重复

Flink 新版本不再可用 At-Most-Once 语义。

---
