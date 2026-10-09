---
id: FLINK-0422
type: technical
question: 请详细解释Kafka中的Topic、Partition和Consumer Group的概念，以及它们之间的关系是什么？在实际应用中如何合理设置这些参数？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Topic 是消息分类，Partition 是并行单位，Consumer Group 是消费组。

# 参考回答

Topic 是消息的逻辑分类，一个 Topic 分多个 Partition 实现并行，Consumer Group 里的消费者分摊 Partition。分区数决定并行度，要跟下游并行度对齐。

# 追问

- 分区数怎么定？
