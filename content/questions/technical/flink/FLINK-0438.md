---
id: FLINK-0438
type: technical
question: Kafka的消费者如何实现消息的过滤？请说明过滤的几种方式和各自的优缺点。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

消费后过滤，或用分区和消息 key 预过滤。

# 参考回答

过滤主要靠消费后业务逻辑过滤，或用消息 key、分区做粗粒度过滤。消费端过滤灵活但浪费带宽，分区过滤省但粗。看过滤条件复杂度。

# 追问

- 过滤放哪端好？
