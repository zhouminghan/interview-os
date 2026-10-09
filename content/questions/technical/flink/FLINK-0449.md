---
id: FLINK-0449
type: technical
question: 在Kafka集群中，如何实现跨数据中心的数据同步？请详细说明Mirror Maker的工作原理和配置方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MirrorMaker 消费源集群写到目标集群。

# 参考回答

MirrorMaker 2 从源 Kafka 集群消费消息，复制到目标集群，实现跨数据中心同步和灾备。配置源和目标集群地址、topic 映射。

# 追问

- 跨机房同步延迟怎么处理？
