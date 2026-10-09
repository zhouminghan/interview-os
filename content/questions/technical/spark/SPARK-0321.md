---
id: SPARK-0321
type: technical
question: 实时数仓 vs 离线数仓怎么选？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-大数据开发-20260414 Q22/Q34

T+1 能满足需求优先离线（成本低、维护简单、质量好把控）。实时只做核心指标补充。常见方案：离线主体 + Flink→Kafka→Iceberg 实时链路覆盖核心指标。

---
