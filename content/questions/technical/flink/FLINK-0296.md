---
id: FLINK-0296
type: technical
question: 解释如何从外部存储系统的故障中恢复FlinkSQL作业。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

外部存储恢复后，作业靠 checkpoint 和重试继续。

# 参考回答

外部存储故障时，作业会因连接失败而重试或重启，恢复后从 checkpoint 或 offset 继续。sink 要幂等，避免恢复期间重复写。外部系统要配好超时和重试。

# 追问

- 外部系统故障时数据会丢吗？
