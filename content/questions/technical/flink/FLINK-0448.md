---
id: FLINK-0448
type: technical
question: 请详细解释Kafka的副本机制，包括Leader选举、副本同步、故障转移等过程，以及如何保证数据的一致性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本跟随 leader，挂掉从 ISR 选新 leader。

# 参考回答

每个分区一个 leader 多个 follower，写入走 leader，follower 同步。leader 挂了从 ISR 里选新 leader，保证不丢已提交数据。一致性靠 ISR 和 ack 配置。

# 追问

- ack 参数怎么配？
