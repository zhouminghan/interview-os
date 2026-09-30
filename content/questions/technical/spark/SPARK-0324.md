---
id: SPARK-0324
type: technical
question: 集群资源不足导致任务频繁失败怎么办？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-大数据开发-20260414 Q23

短期：调参 + 错峰调度（非核心任务挪到白天，凌晨是离线数仓高峰期）。中期：优化 SQL 减资源消耗（分区裁剪、MapJoin、抽公共层）。长期：推动扩容+清理废弃"僵尸任务"释放资源。

---
