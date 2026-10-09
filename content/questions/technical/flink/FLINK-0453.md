---
id: FLINK-0453
type: technical
question: 在Kafka集群中，如何实现消息的备份和恢复？请详细说明备份策略和恢复流程。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多副本是基本备份，跨集群用 MirrorMaker。

# 参考回答

备份靠多副本，跨机房灾备用 MirrorMaker 同步到异地集群。恢复从副本或灾备集群恢复，配合消费 offset 继续处理。

# 追问

- 灾备恢复要多久？
