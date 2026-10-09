---
id: FLINK-0495
type: technical
question: 在Kafka集群中，如何实现集群的灾备方案？请详细说明灾备架构、数据同步、故障转移等，以及如何保证业务的连续性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

跨集群同步，故障时切换。

# 参考回答

灾备用 MirrorMaker 跨机房同步到灾备集群，主集群故障时切到灾备。业务连续性靠快速切换和消费端重连。定期演练。

# 追问

- 切换时数据会丢吗？
