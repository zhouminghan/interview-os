---
id: FLINK-0171
type: technical
question: Flink作业的灾备和容灾方案有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

跨集群双跑、savepoint 备份、异地容灾。

# 参考回答

灾备方案是重要作业跨集群双跑、savepoint 定期备份到异地、sink 幂等支持切换。主集群挂了能从异地恢复。

# 追问

- 双跑怎么保证结果一致？
