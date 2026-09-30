---
id: FLINK-0582
type: technical
question: 实时数据质量监控和告警体系怎么设计？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-大数据开发-20260414 Q35

监控维度：数据量（每分钟条数 vs 历史同期）、消费延迟（Kafka Lag）、指标波动（分钟级趋势）、Checkpoint 状态。

告警分级：S 级电话告警、P1 企微告警、P2 记录日志。熔断：下游看板展示"数据更新中"。阈值基于历史数据波动范围设，不拍脑袋。

---
