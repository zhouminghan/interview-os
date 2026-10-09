---
id: FLINK-0426
type: technical
question: Kafka的消费者组机制是如何工作的？请解释消费者组内的负载均衡过程，以及当消费者加入或离开时会发生什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

组内消费者分摊分区，加入离开触发重平衡。

# 参考回答

一个 Consumer Group 里的消费者分摊 Topic 的分区，一个分区只被一个消费者消费。消费者加入或离开会触发 rebalance 重新分配分区，期间短暂停止消费。

# 追问

- rebalance 有什么影响？
