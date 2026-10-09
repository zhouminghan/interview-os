---
id: SPARK-0322
type: technical
question: Lambda 架构 vs Kappa 架构？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-大数据开发-20260414 Q34

Lambda：离线+实时双链路，服务层合并。Kappa：只保留实时链路，重放 Kafka 做修正。

常见做法是用类 Lambda：离线是权威数据，实时是核心指标监控补充。不用纯 Kappa 因为离线需求占大头，全改造成本太高。

---
